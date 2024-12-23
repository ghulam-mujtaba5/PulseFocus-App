// src/backend/services/taskService.js
import { supabase } from '../config';

// Fetch all habits
export async function getHabits() {
    const { data, error } = await supabase.from('habits').select('*');
    if (error) {
        console.error('Error fetching habits:', error);
        return [];
    }
    return data;
}

// Add a new habit
export async function addHabit(habitName) {
    const { data, error } = await supabase.from('habits').insert([{ name: habitName }]);
    if (error) {
        console.error('Error adding habit:', error);
        return null;
    }
    return data;
}

// Update a habit's status
export async function updateHabitStatus(id, status) {
    const { data, error } = await supabase.from('habits').update({ status }).eq('id', id);
    if (error) {
        console.error('Error updating habit status:', error);
        return null;
    }
    return data;
}

// Delete a habit
export async function deleteHabit(id) {
    const { data, error } = await supabase.from('habits').delete().eq('id', id);
    if (error) {
        console.error('Error deleting habit:', error);
        return null;
    }
    return data;
}
