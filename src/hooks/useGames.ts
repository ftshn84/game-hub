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
  rating_top: number;
  ratings: any[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText, // Add search text to the query parameters
      },
    },
    [gameQuery] // Add dependencies for genre and platform
  );
export default useGames;
