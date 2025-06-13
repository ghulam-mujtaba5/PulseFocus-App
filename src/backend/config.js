// src/backend/config.js
import { createClient } from '@supabase/supabase-js';

// Your Supabase details
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://jgyqykznkcscvkgiowhl.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpneXF5a3pua2NzY3ZrZ2lvd2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NDg5NjYsImV4cCI6MjA2MzEyNDk2Nn0.dOSJdzqAuz6rRh073ubFgFozc2u6u1AoV-lydihfPoU';

export const supabase = createClient(supabaseUrl, supabaseKey);
