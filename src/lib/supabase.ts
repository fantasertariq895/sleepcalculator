import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SleepEntry {
  id: string;
  user_id: string;
  bedtime: string;
  wake_time: string;
  sleep_duration: number;
  sleep_cycles: number;
  sleep_quality_rating?: number;
  notes?: string;
  created_at: string;
}
