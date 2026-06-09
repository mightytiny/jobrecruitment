-- Phase 3: prevent employer_id forgery on jobs
--
-- Problem: the jobs INSERT/UPDATE policies (migration 003) only checked
-- `auth.uid() = user_id`. They did NOT verify that the chosen `employer_id`
-- belongs to the caller. A logged-in user could therefore call the API directly
-- and post (or re-point) a job under SOMEONE ELSE'S company, making the public
-- listing show that company's name/phone/email as the contact — i.e. impersonate
-- a real business. The app always sends the caller's own employer_id, but RLS
-- never enforced it.
--
-- Fix: require that employer_id references an employers row owned by the caller,
-- on both INSERT and the post-update row (WITH CHECK). Legitimate posting and
-- editing are unaffected (the app already only uses the caller's own employer_id,
-- and edits never change employer_id).

-- INSERT: row must belong to the caller AND point to the caller's own company.
DROP POLICY IF EXISTS "Auth insert jobs" ON jobs;
CREATE POLICY "Auth insert jobs" ON jobs
  FOR INSERT TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid())
  );

-- UPDATE: only the owner may edit (USING), and the resulting row must still
-- point to the caller's own company (WITH CHECK) — so a job can't be re-pointed
-- to another employer.
DROP POLICY IF EXISTS "Owner update jobs" ON jobs;
CREATE POLICY "Owner update jobs" ON jobs
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (
    auth.uid() = user_id
    AND employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid())
  );
