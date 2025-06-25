import { useQuery } from "@tanstack/react-query";
import { FeatchResponse } from "./useData";
import { Platform } from "./useGames";
import apiClient from "@/assets/services/api-client";
import platform from "./usePlatforms"; // This should be your initial data array

const usePlatforms = () =>
  useQuery<FeatchResponse<Platform>>(
    ["platforms"],
    () =>
      apiClient
        .get<FeatchResponse<Platform>>("platforms")
        .then((res) => res.data),
    {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      //initialData: { count: platform.length, results: platform }, // Use initial data for platforms
    }
  );

export default usePlatforms;
export type { Platform };
