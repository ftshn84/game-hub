import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;
