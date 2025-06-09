import useData from "./useData";
import { Platform } from "./useGames"; // Import Platform type from useGames

const usePlatforms = () => {
  return useData<Platform>("/platforms/lists/parents");
};
export default usePlatforms;
export type { Platform };
