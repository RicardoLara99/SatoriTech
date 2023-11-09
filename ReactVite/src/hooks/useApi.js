import { useState, useEffect } from 'react';

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!endpoint) return;

    setLoading(true);
    fetch(endpoint)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
};

export default useApi;
