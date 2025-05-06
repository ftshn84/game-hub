import { useEffect, useState } from "react";
import apiClient from "../assets/services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGrnresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true); // Set loading state to true before the request
    apiClient
      .get<FetchGrnresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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
  return { genres, error, isLoading }; // Return loading state along with games and error
};
export default useGenres;
function setGames(results: Genre[]) {
  throw new Error("Function not implemented.");
}
