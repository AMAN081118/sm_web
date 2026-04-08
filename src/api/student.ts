import { supabase } from "../lib/supabase";

export interface StudentFilters {
  batches: number[];
  tags: string[];
}

export interface StudentDto {
  id: string;
  name: string;
  image_url: string | null;
  avatar_letter: string;
  bio: string | null;
  linkedin: string | null;
  batch: number;
  tags: string[] | null;
}

export const fetchStudentFilters = async (): Promise<StudentFilters> => {
  const { data, error } = await supabase.rpc("get_student_filters");
  if (error) throw error;
  return data as StudentFilters;
};

export const fetchStudentsCursor = async (
  batchYear: number | null,
  tagName: string | null,
  cursorName: string | null,
  cursorId: string | null,
  limit: number = 12,
): Promise<StudentDto[]> => {
  const { data, error } = await supabase.rpc("get_students_cursor", {
    p_batch_year: batchYear,
    p_tag_name: tagName === "All" ? null : tagName,
    p_cursor_name: cursorName,
    p_cursor_id: cursorId,
    p_limit: limit,
  });
  if (error) throw error;
  return data as StudentDto[];
};
