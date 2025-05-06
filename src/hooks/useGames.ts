import useData from "./useData";

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

const useGames = () => useData<Game>("/games");
export default useGames;
