import apiClient from "@/assets/services/api-client";
import genres from "@/data/genres";
import { useQuery } from "@tanstack/react-query";
import { FeatchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: null;
  year_start: number | null;
  year_end: number | null;
}

export interface Genre {
  platforms: Platform[];
  id: number;
  name: string;
  slug: string;
  image_background?: string;
}

const useGenres = () =>
  useQuery<FeatchResponse<Genre>>(
    ["genres"],
    () =>
      apiClient.get<FeatchResponse<Genre>>("/genres").then((res) => res.data),
    {
      staleTime: 1000 * 60 * 60 * 24,
      initialData: { count: genres.length, results: genres },
    }
  );

export default useGenres;
