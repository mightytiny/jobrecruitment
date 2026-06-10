-- Lock employer AND job-seeker primary contact email to the verified account
-- (signup) email.
--
-- Problem: both employers.email and seekers.email were free text. The employer
-- email is shown publicly as the official company contact, and the seeker email
-- is shown to logged-in users as the way to reach that person. Either could be
-- set to ANY address (including someone else's) via the form or a direct API
-- call with the publishable key. Read-only fields in the UI are cosmetic.
--
-- Fix: require email to equal the caller's verified JWT email (auth.email()) on
-- both INSERT and the post-update row, for both tables. The displayed contact is
-- then always an address the user has actually verified.

-- ---- employers ----
DROP POLICY IF EXISTS "Auth insert employers" ON employers;
CREATE POLICY "Auth insert employers" ON employers
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND email = auth.email());

DROP POLICY IF EXISTS "Owner update employers" ON employers;
CREATE POLICY "Owner update employers" ON employers
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id AND email = auth.email());

-- ---- seekers ----
DROP POLICY IF EXISTS "Auth insert seekers" ON seekers;
CREATE POLICY "Auth insert seekers" ON seekers
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND email = auth.email());

DROP POLICY IF EXISTS "Owner update seekers" ON seekers;
CREATE POLICY "Owner update seekers" ON seekers
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id AND email = auth.email());

-- ---- backfill existing rows to the verified email ----
UPDATE employers e
SET email = u.email
FROM auth.users u
WHERE e.user_id = u.id
  AND e.email IS DISTINCT FROM u.email;

UPDATE seekers s
SET email = u.email
FROM auth.users u
WHERE s.user_id = u.id
  AND s.email IS DISTINCT FROM u.email;
