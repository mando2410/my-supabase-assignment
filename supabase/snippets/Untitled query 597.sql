create table students (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text
);