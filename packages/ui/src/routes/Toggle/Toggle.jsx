import React, { useCallback, useEffect, useState } from 'react';
import { Container } from './Toggle.styled';
import { createToggle, listRoles, listSystems } from './Service/Toggle.service';
import { Button } from '@togglefly/components';

export const Toggle = () => {
  const [ name, setName ] = useState(null);
  const [ allSystems, setAllSystems ] = useState([]);
  const [ allRoles, setAllRoles ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ submitting, setSubmitiing ] = useState(false);
  const [ controller ] = useState(new AbortController());
  const [ error, setError ] = useState(false);

  const handleOnSubmit = (event) => {
    setSubmitiing(true);
    event.preventDefault();
    const justChecked = ({ check }) => check;
    const justId = ({ id }) => id;
    const generateList = (list) => list.filter(justChecked).map(justId)
    const dto = {
      name,
      description: 'Testing Post',
      allowedRoles: generateList(allRoles),
      systems: generateList(allSystems),
    }
    createToggle(dto)
      .finally(() => setSubmitiing(false))
  }

  const _list = useCallback(() => {
    setLoading(true);
    setError(false);

    const handleSystemCallback = (systems) => {
      const systemsCheckBox = systems.map((system) => ({ ...system, check: false }));
      setAllSystems(systemsCheckBox);
    }

    const handleRolesCallback = (roles) => {
      const rolesCheckBox = roles.map((role) => ({ ...role, check: false }));
      setAllRoles(rolesCheckBox);
    }

    const { signal } = controller;
    return Promise.all([
      listSystems(signal).then(handleSystemCallback),
      listRoles(signal).then(handleRolesCallback),
    ]).finally(() => setLoading(false))
  }, []);

  useEffect(() => {
    _list();
    return () => controller.abort();
  }, []);

  const handleOnClickRoles = (id) => {
    const rolesCheckBox = allRoles.map((role) => ({
      ...role,
      check: role.id === id
        ? true
        : role.check,
    }));
    setAllRoles(rolesCheckBox);
  }

  const handleOnClickSystems = (id) => {
    const systemsCheckBox = allSystems.map((system) => ({
      ...system,
      check: system.id === id
        ? true
        : system.check,
    }));
    setAllSystems(systemsCheckBox);
  }

  if(error) {
    return (
      <Container>
        <a href="#/toggles">Voltar</a>
        <h3>New Toggle</h3>
        <span>Oops! There is a Bug here.</span>
      </Container>
    )
  }

  if(loading) {
    return (
      <Container>
        <a href="#/toggles">Voltar</a>
        <h3>New Toggle</h3>
        <span>Loading...</span>
      </Container>
    )
  }

  return (
    <Container>
      <a href="#/toggles">Voltar</a>
      <h3>New Toggle</h3>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="toggle">Name</label>
        <input
          type="text"
          id="toggle"
          value={name}
          disabled={submitting}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="systems">Systems</label>
        {
          allSystems.map((system) => (
            <div key={system.id}>
              <input
                type="checkbox"
                id={system.name}
                name="systems"
                value={system.id}
                disabled={submitting}
                onClick={() => handleOnClickSystems(system.id)}
              />
              <label htmlFor={system.name}>{system.name}</label>
            </div>
          ))
        }
        <label htmlFor="roles">Roles</label>
        {
          allRoles.map((role) => (
            <div key={role.id}>
              <input
                type="checkbox"
                id={role.name}
                name="roles"
                value={role.id}
                disabled={submitting}
                onClick={() => handleOnClickRoles(role.id)}
              />
              <label htmlFor={role.name}>{role.name}</label>
            </div>
          ))
        }
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" />
        <Button type="submit" disabled={submitting}>{loading ? '...loading': 'Add'}</Button>
      </form>
    </Container>
  );
}
