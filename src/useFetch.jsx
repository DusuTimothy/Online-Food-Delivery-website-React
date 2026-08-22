import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`HTTP error: Status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);

      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message || 'Something went wrong');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => controller.abort();
  }, [url]);


  return {data, isLoading, error};
  
};

export default useFetch;