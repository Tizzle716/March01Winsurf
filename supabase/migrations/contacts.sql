-- Create a table for contact form submissions
create table if not exists public.contacts (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  service_interest text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.contacts enable row level security;

-- Create policies
create policy "Contacts can be created by anyone"
  on contacts for insert
  with check ( true );

create policy "Contacts can only be read by authenticated users"
  on contacts for select
  using ( auth.role() = 'authenticated' );

-- Create indexes
create index if not exists contacts_email_idx
  on public.contacts (email);

create index if not exists contacts_created_at_idx
  on public.contacts (created_at desc);

-- Function to handle updating the updated_at column
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Trigger to automatically update the updated_at column
create trigger handle_contacts_updated_at
  before update on public.contacts
  for each row
  execute procedure public.handle_updated_at();
