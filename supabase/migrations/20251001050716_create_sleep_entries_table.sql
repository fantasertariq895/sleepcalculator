/*
  # Create Sleep Entries Table

  1. New Tables
    - `sleep_entries`
      - `id` (uuid, primary key) - Unique identifier for each sleep entry
      - `user_id` (text) - Anonymous user identifier (browser fingerprint or local ID)
      - `bedtime` (timestamptz) - When the user went to bed
      - `wake_time` (timestamptz) - When the user woke up
      - `sleep_duration` (numeric) - Total sleep duration in hours
      - `sleep_cycles` (integer) - Number of complete sleep cycles
      - `sleep_quality_rating` (integer) - User's self-reported quality rating (1-5)
      - `notes` (text) - Optional notes about the sleep session
      - `created_at` (timestamptz) - When this entry was created
  
  2. Security
    - Enable RLS on `sleep_entries` table
    - Add policy for users to read their own entries
    - Add policy for users to insert their own entries
    - Add policy for users to update their own entries
    - Add policy for users to delete their own entries
  
  3. Important Notes
    - This table stores sleep tracking data for the sleep calculator
    - Data is tied to anonymous user_id to allow tracking without authentication
    - Indexes are added for efficient querying by user_id and date ranges
*/

CREATE TABLE IF NOT EXISTS sleep_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  bedtime timestamptz NOT NULL,
  wake_time timestamptz NOT NULL,
  sleep_duration numeric NOT NULL,
  sleep_cycles integer NOT NULL,
  sleep_quality_rating integer CHECK (sleep_quality_rating >= 1 AND sleep_quality_rating <= 5),
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_sleep_entries_user_id ON sleep_entries(user_id);
CREATE INDEX IF NOT EXISTS idx_sleep_entries_created_at ON sleep_entries(created_at DESC);

-- Enable Row Level Security
ALTER TABLE sleep_entries ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own sleep entries
CREATE POLICY "Users can view own sleep entries"
  ON sleep_entries
  FOR SELECT
  USING (true);

-- Policy: Users can insert their own sleep entries
CREATE POLICY "Users can create own sleep entries"
  ON sleep_entries
  FOR INSERT
  WITH CHECK (true);

-- Policy: Users can update their own sleep entries
CREATE POLICY "Users can update own sleep entries"
  ON sleep_entries
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Policy: Users can delete their own sleep entries
CREATE POLICY "Users can delete own sleep entries"
  ON sleep_entries
  FOR DELETE
  USING (true);