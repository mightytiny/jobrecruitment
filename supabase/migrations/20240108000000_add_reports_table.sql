create table public.reports (
  id uuid primary key default gen_random_uuid(),
  listing_type text not null check (listing_type in ('job','seeker')),
  listing_id uuid not null,
  reporter_id uuid not null references auth.users(id),
  created_at timestamptz default now()
);

alter table public.reports enable row level security;

create policy "Authenticated users can insert reports"
  on public.reports for insert
  to authenticated
  with check (auth.uid() = reporter_id);
