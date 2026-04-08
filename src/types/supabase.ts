export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          achievement_date: string | null
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          student_id: string | null
          title: string
        }
        Insert: {
          achievement_date?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          student_id?: string | null
          title: string
        }
        Update: {
          achievement_date?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          student_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "achievements_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      batches: {
        Row: {
          created_at: string | null
          id: string
          year: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          year: number
        }
        Update: {
          created_at?: string | null
          id?: string
          year?: number
        }
        Relationships: []
      }
      courses: {
        Row: {
          code: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      hof_competition_members: {
        Row: {
          competition_id: string
          student_id: string
          team_role: string | null
        }
        Insert: {
          competition_id: string
          student_id: string
          team_role?: string | null
        }
        Update: {
          competition_id?: string
          student_id?: string
          team_role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hof_competition_members_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "hof_competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hof_competition_members_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      hof_competitions: {
        Row: {
          competition_date: string | null
          created_at: string | null
          display_order: number | null
          id: string
          logo_url: string | null
          name: string
          rank_award: string
        }
        Insert: {
          competition_date?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          logo_url?: string | null
          name: string
          rank_award: string
        }
        Update: {
          competition_date?: string | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          logo_url?: string | null
          name?: string
          rank_award?: string
        }
        Relationships: []
      }
      hof_coordinators: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: string
          role: string
          society: string
          student_id: string
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          role: string
          society: string
          student_id: string
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          role?: string
          society?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hof_coordinators_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      hof_internships: {
        Row: {
          company: string
          created_at: string | null
          display_order: number | null
          id: string
          role: string
          student_id: string
        }
        Insert: {
          company: string
          created_at?: string | null
          display_order?: number | null
          id?: string
          role: string
          student_id: string
        }
        Update: {
          company?: string
          created_at?: string | null
          display_order?: number | null
          id?: string
          role?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hof_internships_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      news_events: {
        Row: {
          content: string
          cover_image: string | null
          created_at: string | null
          id: string
          is_published: boolean | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          cover_image?: string | null
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          cover_image?: string | null
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      placement_categories: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      placement_category_stats: {
        Row: {
          batch_id: string
          category_id: string
          percentage: number | null
        }
        Insert: {
          batch_id: string
          category_id: string
          percentage?: number | null
        }
        Update: {
          batch_id?: string
          category_id?: string
          percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "placement_category_stats_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "placement_category_stats_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "placement_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      placement_stats: {
        Row: {
          batch_id: string
          created_at: string | null
          higher_studies_percentage: number | null
          placed_percentage: number | null
        }
        Insert: {
          batch_id: string
          created_at?: string | null
          higher_studies_percentage?: number | null
          placed_percentage?: number | null
        }
        Update: {
          batch_id?: string
          created_at?: string | null
          higher_studies_percentage?: number | null
          placed_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "placement_stats_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: true
            referencedRelation: "batches"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          id: string
          role: string
        }
        Insert: {
          id: string
          role: string
        }
        Update: {
          id?: string
          role?: string
        }
        Relationships: []
      }
      project_categories: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      project_members: {
        Row: {
          project_id: string
          role: string | null
          student_id: string
        }
        Insert: {
          project_id: string
          role?: string | null
          student_id: string
        }
        Update: {
          project_id?: string
          role?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          batch_id: string | null
          category_id: string | null
          created_at: string | null
          description: string
          id: string
          image_url: string | null
          is_published: boolean | null
          project_date: string | null
          rank: number
          slug: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          batch_id?: string | null
          category_id?: string | null
          created_at?: string | null
          description: string
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          project_date?: string | null
          rank?: number
          slug?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          batch_id?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          project_date?: string | null
          rank?: number
          slug?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "project_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      research_publications: {
        Row: {
          created_at: string | null
          external_link: string
          id: string
          image_url: string | null
          published_year: number | null
          title: string
        }
        Insert: {
          created_at?: string | null
          external_link: string
          id?: string
          image_url?: string | null
          published_year?: number | null
          title: string
        }
        Update: {
          created_at?: string | null
          external_link?: string
          id?: string
          image_url?: string | null
          published_year?: number | null
          title?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          content: string
          key: string
          updated_at: string | null
        }
        Insert: {
          content: string
          key: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          key?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      student_tags: {
        Row: {
          student_id: string
          tag_id: string
        }
        Insert: {
          student_id: string
          tag_id: string
        }
        Update: {
          student_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_tags_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          batch_id: string | null
          bio: string | null
          created_at: string | null
          email: string | null
          gender: Database["public"]["Enums"]["student_gender"] | null
          id: string
          image_url: string | null
          linkedin: string | null
          name: string
          roll_no: string | null
        }
        Insert: {
          batch_id?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          gender?: Database["public"]["Enums"]["student_gender"] | null
          id?: string
          image_url?: string | null
          linkedin?: string | null
          name: string
          roll_no?: string | null
        }
        Update: {
          batch_id?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          gender?: Database["public"]["Enums"]["student_gender"] | null
          id?: string
          image_url?: string | null
          linkedin?: string | null
          name?: string
          roll_no?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "students_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "batches"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_hall_of_fame: { Args: never; Returns: Json }
      get_hall_of_fame_data: { Args: never; Returns: Json }
      get_placement_overview: { Args: { batch_year: number }; Returns: Json }
      get_project_by_slug: { Args: { project_slug: string }; Returns: Json }
      get_projects_cursor: {
        Args: {
          p_batch_year?: number
          p_category_name?: string
          p_cursor_date?: string
          p_cursor_id?: string
          p_limit?: number
        }
        Returns: Json
      }
      get_projects_filtered: {
        Args: {
          batch_year: number
          category_name: string
          limit_count: number
          offset_count: number
        }
        Returns: Json
      }
      get_student_filters: { Args: never; Returns: Json }
      get_students_cursor: {
        Args: {
          p_batch_year?: number
          p_cursor_id?: string
          p_cursor_name?: string
          p_limit?: number
          p_tag_name?: string
        }
        Returns: Json
      }
      get_students_filtered: {
        Args: {
          batch_year: number
          limit_count: number
          offset_count: number
          tag_name: string
        }
        Returns: Json
      }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      student_gender: "male" | "female" | "others"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      student_gender: ["male", "female", "others"],
    },
  },
} as const
