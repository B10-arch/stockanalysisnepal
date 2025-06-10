export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      market_overview: {
        Row: {
          created_at: string
          gainers_count: number | null
          id: string
          index_change: number | null
          index_change_percentage: number | null
          losers_count: number | null
          nepse_index: number | null
          total_turnover: number | null
          total_volume: number | null
          trading_date: string
          unchanged_count: number | null
        }
        Insert: {
          created_at?: string
          gainers_count?: number | null
          id?: string
          index_change?: number | null
          index_change_percentage?: number | null
          losers_count?: number | null
          nepse_index?: number | null
          total_turnover?: number | null
          total_volume?: number | null
          trading_date: string
          unchanged_count?: number | null
        }
        Update: {
          created_at?: string
          gainers_count?: number | null
          id?: string
          index_change?: number | null
          index_change_percentage?: number | null
          losers_count?: number | null
          nepse_index?: number | null
          total_turnover?: number | null
          total_volume?: number | null
          trading_date?: string
          unchanged_count?: number | null
        }
        Relationships: []
      }
      stock_predictions: {
        Row: {
          confidence_level: number | null
          created_at: string
          current_price: number | null
          id: string
          predicted_price: number | null
          prediction_date: string
          reasoning: string | null
          stock_id: string | null
          timeframe: string | null
          trend: string | null
        }
        Insert: {
          confidence_level?: number | null
          created_at?: string
          current_price?: number | null
          id?: string
          predicted_price?: number | null
          prediction_date: string
          reasoning?: string | null
          stock_id?: string | null
          timeframe?: string | null
          trend?: string | null
        }
        Update: {
          confidence_level?: number | null
          created_at?: string
          current_price?: number | null
          id?: string
          predicted_price?: number | null
          prediction_date?: string
          reasoning?: string | null
          stock_id?: string | null
          timeframe?: string | null
          trend?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_predictions_stock_id_fkey"
            columns: ["stock_id"]
            isOneToOne: false
            referencedRelation: "stocks"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_prices: {
        Row: {
          change_amount: number | null
          change_percentage: number | null
          close_price: number | null
          created_at: string
          high_price: number | null
          id: string
          low_price: number | null
          open_price: number | null
          stock_id: string | null
          trading_date: string
          turnover: number | null
          volume: number | null
        }
        Insert: {
          change_amount?: number | null
          change_percentage?: number | null
          close_price?: number | null
          created_at?: string
          high_price?: number | null
          id?: string
          low_price?: number | null
          open_price?: number | null
          stock_id?: string | null
          trading_date: string
          turnover?: number | null
          volume?: number | null
        }
        Update: {
          change_amount?: number | null
          change_percentage?: number | null
          close_price?: number | null
          created_at?: string
          high_price?: number | null
          id?: string
          low_price?: number | null
          open_price?: number | null
          stock_id?: string | null
          trading_date?: string
          turnover?: number | null
          volume?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_prices_stock_id_fkey"
            columns: ["stock_id"]
            isOneToOne: false
            referencedRelation: "stocks"
            referencedColumns: ["id"]
          },
        ]
      }
      stocks: {
        Row: {
          created_at: string
          id: string
          name: string
          sector: string | null
          symbol: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          sector?: string | null
          symbol: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          sector?: string | null
          symbol?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
