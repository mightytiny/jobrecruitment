-- Add email columns to seekers and employers
ALTER TABLE seekers ADD COLUMN email TEXT;
ALTER TABLE employers ADD COLUMN email TEXT;

CREATE INDEX idx_seekers_email ON seekers(email);
CREATE INDEX idx_employers_email ON employers(email);
