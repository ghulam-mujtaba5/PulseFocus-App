// src/backend/config.js
import { createClient } from '@supabase/supabase-js';

// Your Supabase details
const supabaseUrl = 'https://zkpszqnaypuoexggnaoj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcHN6cW5heXB1b2V4Z2duYW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NjM1NjIsImV4cCI6MjA1MDUzOTU2Mn0.NJGOAYN9DjJ759N6W2SzloGX_gscpI30v1TBi1zF1vk';

export const supabase = createClient(supabaseUrl, supabaseKey);
