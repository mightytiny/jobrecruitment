-- Harden the reports table against abuse.
--
-- Before: any authenticated user could insert unlimited reports, re-report the
-- same listing repeatedly, and reference a listing_id that doesn't exist.
--
-- Guards:
--   1. One report per user per listing (unique constraint) — re-reporting the
--      same listing is meaningless and is the easiest spam vector.
--   2. Rate limit: at most 5 reports per user per rolling 24 hours. Flagging a
--      listing as fake/inappropriate is a rare action; a genuine user never
--      approaches this. It stops an account mass-flagging many listings (e.g. to
--      take down a competitor). Tune the 5 / interval if needed.
--   3. The reported listing must actually exist (job -> jobs, seeker ->
--      seeker_ads), so reports can't be stuffed with junk ids.
--
-- The rate check runs in a SECURITY DEFINER trigger so it can count the user's
-- rows regardless of RLS (there is no public SELECT policy on reports).

-- Idempotent: ADD CONSTRAINT has no IF NOT EXISTS form, so guard it.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'reports_unique_per_user') THEN
    ALTER TABLE public.reports
      ADD CONSTRAINT reports_unique_per_user UNIQUE (reporter_id, listing_type, listing_id);
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.guard_report_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count int;
  listing_exists boolean;
BEGIN
  -- reported listing must exist
  IF new.listing_type = 'job' THEN
    SELECT EXISTS(SELECT 1 FROM public.jobs WHERE id = new.listing_id) INTO listing_exists;
  ELSIF new.listing_type = 'seeker' THEN
    SELECT EXISTS(SELECT 1 FROM public.seeker_ads WHERE id = new.listing_id) INTO listing_exists;
  ELSE
    listing_exists := false;
  END IF;
  IF NOT listing_exists THEN
    RAISE EXCEPTION 'reported listing does not exist' USING errcode = 'check_violation';
  END IF;

  -- at most 5 reports per reporter per rolling 24 hours
  SELECT count(*) INTO recent_count
  FROM public.reports
  WHERE reporter_id = new.reporter_id
    AND created_at > now() - interval '24 hours';
  IF recent_count >= 5 THEN
    RAISE EXCEPTION 'report rate limit exceeded' USING errcode = 'check_violation';
  END IF;

  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS trg_guard_report_insert ON public.reports;
CREATE TRIGGER trg_guard_report_insert
  BEFORE INSERT ON public.reports
  FOR EACH ROW EXECUTE FUNCTION public.guard_report_insert();
