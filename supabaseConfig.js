import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uhkoeoikrrmxmbknbsgd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa29lb2lrcnJteG1ia25ic2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MDM2NzEsImV4cCI6MjA1NDM3OTY3MX0.oLZOnrLa9TpD82bVagwGXXMKX28J1jL24JqSh-YUIBY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
