-- Create a table for user profiles
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade,
  first_name text,
  last_name text,
  mobile_number text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create indexes
create index if not exists profiles_id_index
  on public.profiles (id);

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
create trigger handle_profiles_updated_at
  before update on public.profiles
  for each row
  execute procedure public.handle_updated_at();
