export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Budgets: {
        Row: {
          balance: number | null;
          created_at: string;
          description: string | null;
          id: number;
          name: string | null;
          school: number;
        };
        Insert: {
          balance?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          school: number;
        };
        Update: {
          balance?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          school?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Budgets_school_fkey";
            columns: ["school"];
            referencedRelation: "School";
            referencedColumns: ["id"];
          }
        ];
      };
      Expenses: {
        Row: {
          amount: number | null;
          budget: number | null;
          created_at: string;
          description: string | null;
          due_date: string | null;
          id: number;
          title: string | null;
        };
        Insert: {
          amount?: number | null;
          budget?: number | null;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          amount?: number | null;
          budget?: number | null;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Expenses_budget_fkey";
            columns: ["budget"];
            referencedRelation: "Budgets";
            referencedColumns: ["id"];
          }
        ];
      };
      Incomes: {
        Row: {
          amount: number | null;
          created_at: string;
          description: string | null;
          id: number;
          school: number | null;
          stream: number | null;
        };
        Insert: {
          amount?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          school?: number | null;
          stream?: number | null;
        };
        Update: {
          amount?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          school?: number | null;
          stream?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Incomes_school_fkey";
            columns: ["school"];
            referencedRelation: "School";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Incomes_stream_fkey";
            columns: ["stream"];
            referencedRelation: "Streams";
            referencedColumns: ["id"];
          }
        ];
      };
      PUsers: {
        Row: {
          created_at: string;
          id: number;
          role: string | null;
          school: number;
          user: string | null;
          username: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          role?: string | null;
          school: number;
          user?: string | null;
          username?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          role?: string | null;
          school?: number;
          user?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "PUsers_school_fkey";
            columns: ["school"];
            referencedRelation: "School";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "PUsers_user_fkey";
            columns: ["user"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      School: {
        Row: {
          created_at: string;
          email: string | null;
          id: number;
          name: string | null;
          verified: boolean | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          verified?: boolean | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          verified?: boolean | null;
        };
        Relationships: [];
      };
      Streams: {
        Row: {
          amount: number | null;
          created_at: string;
          description: string | null;
          id: number;
          name: string | null;
          school: number | null;
        };
        Insert: {
          amount?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          school?: number | null;
        };
        Update: {
          amount?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          school?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Streams_school_fkey";
            columns: ["school"];
            referencedRelation: "School";
            referencedColumns: ["id"];
          }
        ];
      };
      SwypeRooms: {
        Row: {
          created_at: string;
          description: string;
          id: string;
          messages: Json[] | null;
          tags: string[] | null;
          title: string;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: string;
          messages?: Json[] | null;
          tags?: string[] | null;
          title: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: string;
          messages?: Json[] | null;
          tags?: string[] | null;
          title?: string;
        };
        Relationships: [];
      };
      Users: {
        Row: {
          created_at: string;
          email: string | null;
          id: string;
          name: string | null;
          phone_no: string | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: string;
          name?: string | null;
          phone_no?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: string;
          name?: string | null;
          phone_no?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
