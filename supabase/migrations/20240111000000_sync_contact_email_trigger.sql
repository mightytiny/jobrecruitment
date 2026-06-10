-- Keep the public contact email in sync when a user changes their verified
-- account email (Supabase's confirmed email-change flow).
--
-- Job listings show employers.email and worker contacts show seekers.email, and
-- migration 010 locks those to the verified account email. So when a user
-- completes a verified email change, propagate the new address to their profile
-- row automatically — no need to make a new profile or re-save the form, and the
-- public contact never goes stale.

create or replace function public.sync_contact_email()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.email is distinct from old.email then
    update public.employers set email = new.email where user_id = new.id;
    update public.seekers   set email = new.email where user_id = new.id;
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_email_change on auth.users;
create trigger on_auth_email_change
  after update of email on auth.users
  for each row execute function public.sync_contact_email();
