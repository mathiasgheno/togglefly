import React, { useState } from 'react';
import { Container } from './Toggle.styled';
import { createToggle } from './Service/Toggle.service';

export const Toggle = () => {
  const [ name, setName ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const handleOnSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const dto = {
      name,
      description: 'Testing Post',
      allowedRoles: [],
      systems: [],
    }
    createToggle(dto)
      .finally(() => setLoading(false))
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
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button type="submit" disabled={loading}>{loading ? '...loading': 'Add'}</button>
      </form>
    </Container>
  );
}
