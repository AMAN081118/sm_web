import { supabase } from "../lib/supabase"; // Adjust path as needed

export interface TeamMember {
  name: string;
  role: string;
  img: string;
}

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  society: string;
  image: string;
}

export interface Competition {
  id: string;
  name: string;
  rank: string;
  date: string;
  logo: string;
  team: TeamMember[];
}

export interface Intern {
  id: string;
  name: string;
  company: string;
  role: string;
  image: string;
}

export interface HallOfFameData {
  coordinators: Coordinator[];
  competitions: Competition[];
  interns: Intern[];
  achievements: Achievement[];
}

export const fetchHallOfFameData = async (): Promise<HallOfFameData> => {
  const { data, error } = await supabase.rpc("get_hall_of_fame_data");
  if (error) throw error;
  return data as HallOfFameData;
};

export interface AchievementMember {
  name: string;
  image: string | null;
}

export interface Achievement {
  id: string;
  title: string;
  link: string | null;
  description: string | null;
  category: string | null;
  date: string | null;
  image: string | null;
  members: AchievementMember[];
}
