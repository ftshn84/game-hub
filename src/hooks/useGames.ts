import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App"; // Import GameQuery from App

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  metacritic: number;
  parent_platforms: any;
  background_image: string | undefined;
  id: number;
  name: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery] // Add dependencies for genre and platform
  );
export default useGames;
