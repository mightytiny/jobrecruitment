-- Remove dead seekers columns left over after the listing fields moved to
-- seeker_ads (migration 009). The seekers row is now just the profile / contact
-- record (name, phone, email, telegram_phone, user_id); these columns are no
-- longer read or written by the app.
--
-- Dropping a column also drops its column-level grants (the anon GRANT from
-- migration 004) and any index that depends solely on it (idx_seekers_category,
-- idx_seekers_province). anon keeps SELECT on the remaining granted columns it
-- still needs — id, name, created_at — for the public worker list.

ALTER TABLE public.seekers
  DROP COLUMN IF EXISTS province,
  DROP COLUMN IF EXISTS category,
  DROP COLUMN IF EXISTS experience_level,
  DROP COLUMN IF EXISTS expected_salary,
  DROP COLUMN IF EXISTS skills,
  DROP COLUMN IF EXISTS bio;
