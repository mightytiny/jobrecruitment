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

-- Enable Row Level Security
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE seekers ENABLE ROW LEVEL SECURITY;

-- Public read policies (for search functionality)
CREATE POLICY "Public read employers" ON employers FOR SELECT USING (true);
CREATE POLICY "Public read jobs" ON jobs FOR SELECT USING (true);
CREATE POLICY "Public read seekers" ON seekers FOR SELECT USING (true);

-- Public insert policies (for registration/job posting)
CREATE POLICY "Public insert employers" ON employers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert jobs" ON jobs FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert seekers" ON seekers FOR INSERT WITH CHECK (true);
