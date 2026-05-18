-- Create profiles table for role-based access
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'customer',
  full_name text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- Allow authenticated users to read profiles
create policy "Profiles readable by authenticated users"
  on public.profiles for select
  using (auth.role() = 'authenticated');

-- Allow users to insert their own profile
create policy "Users can insert their profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Allow users to update their own profile
create policy "Users can update their profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Automatically create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role)
  values (new.id, 'customer');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
