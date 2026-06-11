-- Prevent seeker_id forgery on seeker_ads (same bug shape as migration 005
-- fixed for jobs.employer_id).
--
-- Problem: the seeker_ads INSERT/UPDATE policies (migration 009) only checked
-- `auth.uid() = user_id`. They never verified that the chosen `seeker_id`
-- belongs to the caller. A logged-in user could therefore call the API directly
-- and publish an ad pointing at SOMEONE ELSE'S seekers row, making the public
-- worker detail show that person's name/phone/email/telegram as the contact —
-- i.e. impersonate a real job seeker with content they never wrote. The UPDATE
-- policy also had no WITH CHECK at all, so an existing ad could be re-pointed.
--
-- Fix: require that seeker_id references a seekers row owned by the caller, on
-- both INSERT and the post-update row. The app already only uses the caller's
-- own seeker id, so legitimate posting and editing are unaffected.

DROP POLICY IF EXISTS "Owner insert seeker_ads" ON public.seeker_ads;
CREATE POLICY "Owner insert seeker_ads" ON public.seeker_ads
  FOR INSERT TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND seeker_id IN (SELECT id FROM public.seekers WHERE user_id = auth.uid())
  );

DROP POLICY IF EXISTS "Owner update seeker_ads" ON public.seeker_ads;
CREATE POLICY "Owner update seeker_ads" ON public.seeker_ads
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (
    auth.uid() = user_id
    AND seeker_id IN (SELECT id FROM public.seekers WHERE user_id = auth.uid())
  );
