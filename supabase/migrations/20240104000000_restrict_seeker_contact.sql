-- Phase 3: protect job-seeker contact details (PII)
--
-- Problem: the "Public read seekers" policy (migration 001) exposes every
-- column to the anon role, so anyone holding the publishable key can read every
-- seeker's phone and email straight from the API. The client-side phone masking
-- was cosmetic only.
--
-- Fix: keep seeker rows publicly readable (so the worker list and public
-- profiles still work), but use column-level privileges to withhold phone and
-- email from anonymous visitors. Only authenticated users (logged-in employers)
-- may read contact details. Owners read their own rows as `authenticated`, so
-- editing and "My profile" are unaffected.

-- Drop the blanket SELECT for anon, then grant back only the non-contact columns.
REVOKE SELECT ON seekers FROM anon;

GRANT SELECT (
  id, name, province, category, experience_level, expected_salary, bio, created_at
) ON seekers TO anon;

-- Authenticated users keep full read access (phone + email included).
GRANT SELECT ON seekers TO authenticated;
