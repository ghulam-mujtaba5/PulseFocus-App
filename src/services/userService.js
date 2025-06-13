import { supabase } from './supabaseClient.js';

// Get the current user session and profile from Supabase
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) return { error };
  const user = data.user;
  if (!user) return { error: { message: 'No user found' } };
  // Fetch additional profile info from 'users' table
  const { data: profile, error: profileError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();
  if (profileError) return { user, error: profileError };
  return { user: { ...user, ...profile } };
};

export const logout = async () => {
  return await supabase.auth.signOut();
};

export const updateProfile = async (id, updates) => {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const changePassword = async (newPassword) => {
  return await supabase.auth.updateUser({ password: newPassword });
};
