import { supabase } from "../lib/supabase";

export interface ProjectMember {
  student_id: string;
  name: string;
  image: string | null;
  role: string | null;
}

export interface ProjectDto {
  id: string;
  title: string;
  slug: string;
  image_url: string | null;
  description: string;
  project_date: string;
  category: string;
  rank: number;
  team: ProjectMember[] | null;
}

export const fetchRecentProjects = async (): Promise<ProjectDto[]> => {
  const { data, error } = await supabase.rpc("get_projects_filtered", {
    batch_year: null,
    category_name: null,
    limit_count: 10, // Limit to 10 recent projects
    offset_count: 0,
  });

  if (error) throw error;
  return data as ProjectDto[];
};
export const fetchProjectsCursor = async (
  batchYear: number | null,
  categoryName: string | null,
  cursorRank: number | null,
  cursorId: string | null,
  limit: number = 12,
): Promise<ProjectDto[]> => {
  const { data, error } = await supabase.rpc("get_projects_cursor", {
    p_batch_year: batchYear,
    p_category_name: categoryName,
    p_cursor_rank: cursorRank,
    p_cursor_id: cursorId,
    p_limit: limit,
  });

  if (error) throw error;
  return data as ProjectDto[];
};
