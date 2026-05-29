-- Phase 2: auth + ownership
-- Wipe pre-auth data (no user_id linkage possible for these rows)
DELETE FROM jobs;
DELETE FROM seekers;
DELETE FROM employers;

-- Add user_id to each table, NOT NULL + cascade on user delete
ALTER TABLE employers ADD COLUMN user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE seekers   ADD COLUMN user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE jobs      ADD COLUMN user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE;

-- One profile / one employer record per user; jobs unconstrained
ALTER TABLE employers ADD CONSTRAINT employers_user_id_unique UNIQUE (user_id);
ALTER TABLE seekers   ADD CONSTRAINT seekers_user_id_unique   UNIQUE (user_id);

CREATE INDEX idx_employers_user_id ON employers(user_id);
CREATE INDEX idx_seekers_user_id   ON seekers(user_id);
CREATE INDEX idx_jobs_user_id      ON jobs(user_id);

-- Drop the permissive insert policies from migration 001
DROP POLICY IF EXISTS "Public insert employers" ON employers;
DROP POLICY IF EXISTS "Public insert jobs"      ON jobs;
DROP POLICY IF EXISTS "Public insert seekers"   ON seekers;

-- INSERT: authenticated only, and the row must belong to the caller
CREATE POLICY "Auth insert employers" ON employers
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Auth insert jobs" ON jobs
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Auth insert seekers" ON seekers
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- UPDATE / DELETE: only the owner
CREATE POLICY "Owner update employers" ON employers
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owner delete employers" ON employers
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Owner update jobs" ON jobs
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owner delete jobs" ON jobs
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Owner update seekers" ON seekers
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owner delete seekers" ON seekers
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- SELECT policies from migration 001 remain public (intentional for dev phase)
