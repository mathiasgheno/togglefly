import React, { useEffect, useCallback, useState } from 'react';
import { listRoles } from './Service/Roles.service';

export const Roles = () => {
  const [ loading, setLoading ] = useState(true);
  const [ roles, setRoles ] = useState([]);
  const [ erro, setErro ] = useState(false);
  const [ controller ] = useState(new AbortController());

  const _list = useCallback(() => {
    setLoading(true);
    setErro(false);
    const { signal } = controller;
    return listRoles(signal)
      .then((toggles) => setRoles(toggles))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    _list();
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h3>All Roles</h3>
      {loading && (<p>Loading...</p>)}
      {!loading && (
        <ul>
          {
            roles.map(role => (
              <li key={role.id}>{role.name}</li>
            ))
          }
        </ul>
      )}
      {erro && (
        <>
          <p>Something went wrong</p>
          <button onClick={() => _list()}>Try Again!</button>
        </>
      )}
    </div>
  )
}
