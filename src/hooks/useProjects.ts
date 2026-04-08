import { useQuery } from "@tanstack/react-query";
import { fetchRecentProjects } from "../api/project";
import type { ProjectDto } from "../api/project";

export const useRecentProjects = () => {
  return useQuery<ProjectDto[]>({
    queryKey: ["recentProjects"],
    queryFn: fetchRecentProjects,
    staleTime: 1000 * 60 * 5,
  });
};

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProjectsCursor } from "../api/project";

const LIMIT = 12;

interface ProjectCursorParam {
  rank: number;
  id: string;
}

export const useProjectsInfinite = (
  batchYear: number | null = null,
  categoryName: string | null = null,
) => {
  return useInfiniteQuery({
    queryKey: ["projectsInfinite", batchYear, categoryName],

    queryFn: async ({ pageParam }) => {
      const cursor = pageParam as ProjectCursorParam | null;

      return fetchProjectsCursor(
        batchYear,
        categoryName,
        cursor?.rank ?? null,
        cursor?.id ?? null,
        LIMIT,
      );
    },

    initialPageParam: null as ProjectCursorParam | null,

    getNextPageParam: (lastPage) => {
      if (!lastPage || lastPage.length < LIMIT) return undefined;

      const lastProject = lastPage[lastPage.length - 1];

      return {
        rank: lastProject.rank,
        id: lastProject.id,
      };
    },
  });
};
