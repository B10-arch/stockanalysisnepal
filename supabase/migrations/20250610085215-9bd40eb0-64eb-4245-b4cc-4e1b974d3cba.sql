
-- Insert new IPO data into the database
INSERT INTO stocks (symbol, name, sector, created_at, updated_at) VALUES
('HGL', 'Hotel Garima Limited', 'Hotels & Tourism', now(), now()),
('NSHEL', 'North Summit Hydro Energy Limited', 'Hydropower', now(), now()),
('HSUCL', 'Him Star Urja Company Limited', 'Hydropower', now(), now()),
('CHL', 'City Hotel Limited', 'Hotels & Tourism', now(), now()),
('DHEL', 'Daramkhola Hydro Energy Limited', 'Hydropower', now(), now()),
('BHC', 'Bikash Hydropower Company', 'Hydropower', now(), now()),
('TTL', 'Trade Tower Limited', 'Others', now(), now())
ON CONFLICT (symbol) DO NOTHING;

-- Create IPO announcements table to store IPO news and announcements
CREATE TABLE IF NOT EXISTS public.ipo_announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  title TEXT NOT NULL,
  announcement_date DATE NOT NULL,
  status TEXT NOT NULL DEFAULT 'announced', -- announced, open, closed, approved
  type TEXT NOT NULL DEFAULT 'ipo', -- ipo, rights, fpo
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert the IPO announcements
INSERT INTO public.ipo_announcements (company_name, title, announcement_date, status, type, details) VALUES
('Hotel Garima Limited', 'Hotel Garima Limited Partners with NIMB Ace Capital to Launch IPO Journey', '2025-06-08', 'announced', 'ipo', 'Partnership with NIMB Ace Capital for IPO launch'),
('North Summit Hydro Energy Limited', 'Machhapuchchhre Capital Appointed as Issue and Sales Manager for North Summit Hydro''s Public Offering', '2025-06-06', 'announced', 'ipo', 'Issue and Sales Manager appointed'),
('Him Star Urja Company Limited', 'Him Star Urja Company Limited Issuing IPO Shares to Locals of Okhaldhunga & Solukhumbhu District And Nepalese Employed Abroad From Jestha 30', '2025-06-06', 'open', 'ipo', 'IPO for locals and Nepalese abroad starting Jestha 30'),
('City Hotel Limited', '80% Right Shares of City Hotel Limited Added in SEBON Pipeline', '2025-06-03', 'announced', 'rights', '80% Right shares in SEBON pipeline'),
('Daramkhola Hydro Energy Limited', 'Daramkhola Hydro Energy IPO Approved By Sebon, Company To Issue 39.5 Lakh Units Soon To General Public', '2025-06-03', 'approved', 'ipo', 'SEBON approved, 39.5 lakh units to be issued'),
('Him Star Urja Company Limited', 'IPO Proposal of Him Star Urja Company Limited Approved by SEBON', '2025-06-03', 'approved', 'ipo', 'IPO proposal approved by SEBON'),
('Bikash Hydropower Company', 'Bikash Hydropower Company Closing IPO Shares to Locals of Gorkha District And Nepalese Employed Abroad From Today', '2025-06-03', 'closing', 'ipo', 'IPO closing for locals of Gorkha and Nepalese abroad'),
('Trade Tower Limited', 'IPO Issue of Trade Tower Limited Closing Today; Oversubscribed 7.08 Times So Far', '2025-06-03', 'closing', 'ipo', 'Oversubscribed 7.08 times, closing today'),
('Trade Tower Limited', 'Deadline Extended for 32,96,505.19 Units Shares of Trade Tower Limited; Issue Oversubscribed By 6.23 Times So Far', '2025-06-02', 'open', 'ipo', 'Deadline extended, oversubscribed 6.23 times'),
('Trade Tower Limited', 'IPO for General Public: Trade Tower Limited to Issue 32,96,505.19 Units IPO Shares From Today', '2025-05-28', 'open', 'ipo', '32,96,505.19 units for general public');

-- Enable RLS for ipo_announcements table
ALTER TABLE public.ipo_announcements ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access for IPO announcements
CREATE POLICY "Allow public read access to IPO announcements" 
  ON public.ipo_announcements 
  FOR SELECT 
  USING (true);
