-- Stop exposing auth user UUIDs (user_id) to anonymous visitors.
--
-- jobs, seeker_ads and employers are publicly readable, and until now every
-- column — including user_id — was granted to anon. The auth UUID is not
-- directly exploitable but is needless linkability (it ties public listings to
-- auth identities). Withhold it from anon with column-level grants, same
-- technique as migration 004 used for seeker contact columns.
--
-- authenticated keeps full SELECT: owners query their own rows by user_id
-- ("My posts", edit flows), which requires the column.
--
-- The FK columns (employer_id, seeker_id) stay granted: they reference public
-- profile rows (not auth users) and PostgREST needs them for embedded joins.

-- ---- jobs ----
REVOKE SELECT ON public.jobs FROM anon;
GRANT SELECT (
  id, employer_id, title, category, province, employment_type,
  salary_min, salary_max, description, created_at
) ON public.jobs TO anon;
GRANT SELECT ON public.jobs TO authenticated;

-- ---- seeker_ads ----
REVOKE SELECT ON public.seeker_ads FROM anon;
GRANT SELECT (
  id, seeker_id, title, category, province, experience_level,
  expected_salary, description, created_at
) ON public.seeker_ads TO anon;
GRANT SELECT ON public.seeker_ads TO authenticated;

-- ---- employers ----
-- Contact details (phone/email/telegram) stay public by design — industry
-- standard for job boards; seekers must reach employers without an account.
REVOKE SELECT ON public.employers FROM anon;
GRANT SELECT (
  id, company_name, phone, email, contact_name, telegram,
  industry, location, website, created_at
) ON public.employers TO anon;
GRANT SELECT ON public.employers TO authenticated;
