import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchStudentFilters, fetchStudentsCursor } from "../api/student";
import type { StudentFilters, StudentDto } from "../api/student";

const LIMIT = 12;

export const useStudentFilters = () => {
  return useQuery<StudentFilters>({
    queryKey: ["studentFilters"],
    queryFn: fetchStudentFilters,
    staleTime: 1000 * 60 * 60,
  });
};

interface CursorParam {
  name: string;
  id: string;
}

export const useStudentsInfinite = (
  selectedBatch: number | null,
  selectedTag: string | null,
) => {
  return useInfiniteQuery({
    queryKey: ["students", selectedBatch, selectedTag],
    queryFn: async ({ pageParam }) => {
      const cursor = pageParam as CursorParam | null;
      return fetchStudentsCursor(
        selectedBatch,
        selectedTag,
        cursor?.name || null,
        cursor?.id || null,
        LIMIT,
      );
    },
    initialPageParam: null as CursorParam | null,
    getNextPageParam: (lastPage: StudentDto[]): CursorParam | null => {
      if (lastPage.length === LIMIT) {
        const lastStudent = lastPage[lastPage.length - 1];
        return { name: lastStudent.name, id: lastStudent.id };
      }
      return null;
    },
    enabled: !!selectedBatch,
  });
};
