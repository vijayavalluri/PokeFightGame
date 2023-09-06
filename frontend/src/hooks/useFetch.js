import { useState, useEffect, useCallback } from "react";

const useFetch = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(() => {
    const abortController = new AbortController();

    setIsLoading(true);
    setError(false);
    setErrorMessage("");

    fetch(url, { ...config, signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }

        return res.json();
      })
      .then((resData) => {
        setIsLoading(false);
        setError(false);

        setData(resData.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        setErrorMessage(err.message);
      });

    return () => abortController.abort();
  }, [url, config]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, errorMessage, refetch: fetchData };
};

export default useFetch;