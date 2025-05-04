import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../assets/services/api-client";
import { CanceledError } from "axios";
// Removed unused import as the Game interface is already defined in this file
// Removed unused import as the FetchGamesResponse interface is defined below
export interface Game {
  background_image: string | undefined;
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
  background_image: string;
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore if the error is due to the request being canceled
        setError(err.message);
      });
    return () => {
      controller.abort();
    }; // Cleanup function to abort the request on component unmount
  }, []); // Added dependency array to avoid infinite loop
  return { games, error };
};
export default useGames;
