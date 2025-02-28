import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kcfspaikpvobylaqgpna.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZnNwYWlrcHZvYnlsYXFncG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMTQ5NTIsImV4cCI6MjA0OTY5MDk1Mn0.Uts-zZ_W7-CcGFMCNuJ_RG12eXPoJwnOJWhv9nqhozE';

export const supabase = createClient(supabaseUrl, supabaseKey);
