DROP POLICY IF EXISTS "Anyone can submit a quote request" ON public.quote_requests;

CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
TO public
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 200
  AND length(trim(email)) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(phone)) BETWEEN 5 AND 50
  AND length(trim(service)) BETWEEN 1 AND 100
  AND (message IS NULL OR length(message) <= 5000)
  AND (company IS NULL OR length(company) <= 200)
  AND (origin IS NULL OR length(origin) <= 200)
  AND (destination IS NULL OR length(destination) <= 200)
  AND status = 'pending'
);