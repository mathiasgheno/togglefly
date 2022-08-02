import { useEffect, useState } from 'react';

export function listFeatures(signal) {
  const url = 'https://l3ut0axl99.execute-api.sa-east-1.amazonaws.com/dev/features';
  return fetch(url, { method: 'GET', signal })
    .then((res) => res.json())
}

export function useTogglefly() {
  const [toggle, setToggles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listFeatures()
      .then(_toggles => setToggles(_toggles))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    toggle,
  ];
}
