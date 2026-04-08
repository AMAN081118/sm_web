import { useQuery } from "@tanstack/react-query";
import { fetchHallOfFameData } from "../api/hallOfFame";
import type { HallOfFameData } from "../api/hallOfFame";

export const useHallOfFame = () => {
  return useQuery<HallOfFameData>({
    queryKey: ["hallOfFame"],
    queryFn: fetchHallOfFameData,
    staleTime: 1000 * 60 * 60,
  });
};
