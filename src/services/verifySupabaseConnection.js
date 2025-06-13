// This script checks if the Supabase connection is working by making a simple request.
import { supabase } from './supabaseClient.js';

(async () => {
  try {
    const { data, error } = await supabase.from('test_table').select('*').limit(1);
    if (error) {
      console.error('Supabase connection error:', error.message);
    } else {
      console.log('Supabase connection successful!');
      console.log('Sample data:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
})();

