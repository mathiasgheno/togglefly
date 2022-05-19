import React, { useEffect, useCallback, useState } from 'react';
import { listSystems } from './Service/Systems.service';

export const Systems = () => {
  const [ loading, setLoading ] = useState(true);
  const [ systems, setSystems ] = useState([]);
  const [ erro, setErro ] = useState(false);
  const [ controller ] = useState(new AbortController());

  const _list = useCallback(() => {
    setLoading(true);
    setErro(false);
    const { signal } = controller;
    return listSystems(signal)
      .then((systems) => setSystems(systems))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    _list();
    return () => controller.abort();
  }, []);

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3>All Systems</h3>
        <a href="#/system">New System</a>
      </div>
      {loading && (<p>Loading...</p>)}
      {!loading && (
        <ul>
          {
            systems.map(system => (
              <li key={system.id}>{system.name}</li>
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

