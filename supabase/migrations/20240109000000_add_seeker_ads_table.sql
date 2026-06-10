create table public.seeker_ads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  seeker_id uuid not null references public.seekers(id) on delete cascade,
  title text,
  category text,
  province text,
  experience_level text,
  expected_salary int,
  description text,
  created_at timestamptz default now()
);

alter table public.seeker_ads enable row level security;

create policy "Public read seeker_ads" on public.seeker_ads for select using (true);
create policy "Owner insert seeker_ads" on public.seeker_ads for insert with check (auth.uid() = user_id);
create policy "Owner update seeker_ads" on public.seeker_ads for update using (auth.uid() = user_id);
create policy "Owner delete seeker_ads" on public.seeker_ads for delete using (auth.uid() = user_id);
