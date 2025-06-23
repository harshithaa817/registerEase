import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gcajlvnbwarolfscwiuq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjYWpsdm5id2Fyb2xmc2N3aXVxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDU5MDE4NSwiZXhwIjoyMDY2MTY2MTg1fQ.7In0wErMtqOOBnG9lqZuv7q5YXCoy8qbHwNu6nPDn1E';
export const supabase = createClient(supabaseUrl, supabaseKey);
