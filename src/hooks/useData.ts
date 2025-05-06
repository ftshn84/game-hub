import { useEffect, useState } from "react";
import apiClient from "../assets/services/api-client";
import { CanceledError } from "axios";

interface FeatchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true); // Set loading state to true before the request
    apiClient
      .get<FeatchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false); // Set loading state to false after the request is successful
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore if the error is due to the request being canceled
        setError(err.message);
        setIsLoading(false); // Set loading state to false if there's an error
      });
    return () => {
      controller.abort();
    }; // Cleanup function to abort the request on component unmount
  }, []); // Added dependency array to avoid infinite loop
  return { data, error, isLoading }; // Return loading state along with games and error
};
export default useData;
