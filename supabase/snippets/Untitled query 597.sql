CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  roll_number VARCHAR(100),
  class VARCHAR(100)
);

CREATE TABLE teacher (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subject VARCHAR(100),
  class VARCHAR(100)
);