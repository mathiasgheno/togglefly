import React, { useEffect, useState, useCallback } from 'react';
import { listFeatures } from './Service/Feature.service';

export const Features = () => {
  const [ loading, setLoading ] = useState(true);
  const [ toggles, setToggles ] = useState([]);
  const [ erro, setErro ] = useState(false);
  const [ controller ] = useState(new AbortController());

  const _list = useCallback(() => {
    setLoading(true);
    setErro(false);
    const { signal } = controller;
    return listFeatures(signal)
      .then((toggles) => setToggles(toggles))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    _list();
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h3>All Features</h3>
      {loading && (<p>Loading...</p>)}
      {!loading && (
        <ul>
          {
            toggles.map(toggle => (
              <li key={toggle.id}>{toggle.name}</li>
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
