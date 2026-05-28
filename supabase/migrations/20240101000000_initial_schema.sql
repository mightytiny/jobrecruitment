-- Create employers table
CREATE TABLE employers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  phone TEXT,
  contact_name TEXT,
  industry TEXT,
  location TEXT,
  website TEXT,
  about TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create jobs table
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID NOT NULL REFERENCES employers(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT,
  province TEXT,
  employment_type TEXT,
  salary_min INTEGER,
  salary_max INTEGER,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create seekers table
CREATE TABLE seekers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT,
  province TEXT,
  category TEXT,
  experience_level TEXT,
  expected_salary INTEGER,
  skills TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_jobs_employer_id ON jobs(employer_id);
CREATE INDEX idx_jobs_category ON jobs(category);
CREATE INDEX idx_jobs_province ON jobs(province);
CREATE INDEX idx_seekers_category ON seekers(category);
CREATE INDEX idx_seekers_province ON seekers(province);
