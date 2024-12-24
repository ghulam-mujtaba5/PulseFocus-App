// // // // // src/backend/services/taskService.js
// // // import { supabase } from '../config';

// // // // Fetch all tasks
// // // export async function getTasks() {
// // //     const { data, error } = await supabase.from('tasks').select('*');
// // //     if (error) {
// // //         console.error('Error fetching tasks:', error);
// // //         return [];
// // //     }
// // //     return data;
// // // }

// // // // Add a new task
// // // export async function addTask(taskTitle) {
// // //     const { data, error } = await supabase.from('tasks').insert([{ title: taskTitle }]);
// // //     if (error) {
// // //         console.error('Error adding task:', error);
// // //         return null;
// // //     }
// // //     return data;
// // // }

// // // // Update a task's status
// // // export async function updateTaskStatus(id, status) {
// // //     const { data, error } = await supabase.from('tasks').update({ status }).eq('id', id);
// // //     if (error) {
// // //         console.error('Error updating task status:', error);
// // //         return null;
// // //     }
// // //     return data;
// // // }

// // // // Delete a task
// // // export async function deleteTask(id) {
// // //     const { data, error } = await supabase.from('tasks').delete().eq('id', id);
// // //     if (error) {
// // //         console.error('Error deleting task:', error);
// // //         return null;
// // //     }
// // //     return data;
// // // }
// // // src/backend/services/taskService.js

// // import { supabase } from '../config';

// // // Fetch all tasks
// // export async function getTasks() {
// //     const { data, error } = await supabase.from('tasks').select('*');
// //     if (error) {
// //         console.error('Error fetching tasks:', error);
// //         return [];
// //     }
// //     return data;
// // }

// // // Fetch all habits (this function was missing)
// // export async function getHabits() {
// //     const { data, error } = await supabase.from('habits').select('*');
// //     if (error) {
// //         console.error('Error fetching habits:', error);
// //         return [];
// //     }
// //     return data;
// // }

// // // Add a new task
// // export async function addTask(taskTitle) {
// //     const { data, error } = await supabase.from('tasks').insert([{ title: taskTitle }]);
// //     if (error) {
// //         console.error('Error adding task:', error);
// //         return null;
// //     }
// //     return data;
// // }

// // // Add a new habit (this function was missing)
// // export async function addHabit(habitTitle) {
// //     const { data, error } = await supabase.from('habits').insert([{ title: habitTitle }]);
// //     if (error) {
// //         console.error('Error adding habit:', error);
// //         return null;
// //     }
// //     return data;
// // }

// // // Update a task's status
// // export async function updateTaskStatus(id, status) {
// //     const { data, error } = await supabase.from('tasks').update({ status }).eq('id', id);
// //     if (error) {
// //         console.error('Error updating task status:', error);
// //         return null;
// //     }
// //     return data;
// // }

// // // Update a habit's status (this function was missing)
// // export async function updateHabitStatus(id, status) {
// //     const { data, error } = await supabase.from('habits').update({ status }).eq('id', id);
// //     if (error) {
// //         console.error('Error updating habit status:', error);
// //         return null;
// //     }
// //     return data;
// // }

// // // Delete a task
// // export async function deleteTask(id) {
// //     const { data, error } = await supabase.from('tasks').delete().eq('id', id);
// //     if (error) {
// //         console.error('Error deleting task:', error);
// //         return null;
// //     }
// //     return data;
// // }

// // // Delete a habit (this function was missing)
// // export async function deleteHabit(id) {
// //     const { data, error } = await supabase.from('habits').delete().eq('id', id);
// //     if (error) {
// //         console.error('Error deleting habit:', error);
// //         return null;
// //     }
// //     return data;
// // }

// //src\backend\services\taskService.js
// import { supabase } from '../config';

// // Fetch all tasks for a specific user
// export async function getTasks(userId) {
//     try {
//         const { data, error } = await supabase
//             .from('tasks')
//             .select('*')
//             .eq('user_id', userId);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//         return [];
//     }
// }

// // Fetch all habits for a user
// export async function getHabits(userId) {
//     try {
//         const { data, error } = await supabase
//             .from('habits')
//             .select('*')
//             .eq('user_id', userId);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error fetching habits:', error);
//         return [];
//     }
// }

// // Add a new task (including due_date and status)
// export async function addTask(title, description, userId, dueDate, status = 'Pending') {
//     try {
//         const { data, error } = await supabase
//             .from('tasks')
//             .insert([{ title, description, user_id: userId, due_date: dueDate, status }]);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error adding task:', error);
//         return null;
//     }
// }

// // Add a new habit
// export async function addHabit(name, userId) {
//     try {
//         const { data, error } = await supabase
//             .from('habits')
//             .insert([{ name, user_id: userId }]);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error adding habit:', error);
//         return null;
//     }
// }

// // Update a task's status (using 'completed' boolean)
// export async function updateTaskStatus(id, completed) {
//     try {
//         const { data, error } = await supabase
//             .from('tasks')
//             .update({ completed })
//             .eq('id', id);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error updating task status:', error);
//         return null;
//     }
// }

// // Update a habit's status
// export async function updateHabitStatus(id, status) {
//     try {
//         const { data, error } = await supabase
//             .from('habits')
//             .update({ status })
//             .eq('id', id);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error updating habit status:', error);
//         return null;
//     }
// }

// // Delete a task
// export async function deleteTask(id) {
//     try {
//         const { data, error } = await supabase
//             .from('tasks')
//             .delete()
//             .eq('id', id);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error deleting task:', error);
//         return null;
//     }
// }

// // Delete a habit
// export async function deleteHabit(id) {
//     try {
//         const { data, error } = await supabase
//             .from('habits')
//             .delete()
//             .eq('id', id);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error deleting habit:', error);
//         return null;
//     }
// }

// // Add a new goal (progress tracking)
// export async function addGoal(title, targetDate, userId) {
//     try {
//         const { data, error } = await supabase
//             .from('goals')
//             .insert([{ title, target_date: targetDate, user_id: userId }]);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error adding goal:', error);
//         return null;
//     }
// }

// // Update a goal's progress
// export async function updateGoalProgress(id, progress) {
//     try {
//         const { data, error } = await supabase
//             .from('goals')
//             .update({ progress })
//             .eq('id', id);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error updating goal progress:', error);
//         return null;
//     }
// }

// // Add a new reminder
// export async function addReminder(title, description, reminderTime, userId) {
//     try {
//         const { data, error } = await supabase
//             .from('reminders')
//             .insert([{ title, description, reminder_time: reminderTime, user_id: userId }]);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error adding reminder:', error);
//         return null;
//     }
// }

// // Delete a reminder
// export async function deleteReminder(id) {
//     try {
//         const { data, error } = await supabase
//             .from('reminders')
//             .delete()
//             .eq('id', id);

//         if (error) throw error;
//         return data;
//     } catch (error) {
//         console.error('Error deleting reminder:', error);
//         return null;
//     }
// }


// src/backend/services/taskService.js
import { supabase } from '../config.js'; // Add .js extension here

// Fetch all tasks for a specific user
export async function getTasks(userId) {
    try {
        const { data, error } = await supabase
            .from('tasks')
            .select('*')
            .eq('user_id', userId);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
}

// Fetch all habits for a user
export async function getHabits(userId) {
    try {
        const { data, error } = await supabase
            .from('habits')
            .select('*')
            .eq('user_id', userId);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching habits:', error);
        return [];
    }
}

// Add a new task (including due_date and status)
export async function addTask(title, description, userId, dueDate, status = 'Pending') {
    try {
        const { data, error } = await supabase
            .from('tasks')
            .insert([{ title, description, user_id: userId, due_date: dueDate, status }]);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding task:', error);
        return null;
    }
}

// Add a new habit
export async function addHabit(name, userId) {
    try {
        const { data, error } = await supabase
            .from('habits')
            .insert([{ name, user_id: userId }]);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding habit:', error);
        return null;
    }
}

// Update a task's status (using 'completed' boolean)
export async function updateTaskStatus(id, completed) {
    try {
        const { data, error } = await supabase
            .from('tasks')
            .update({ completed })
            .eq('id', id);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating task status:', error);
        return null;
    }
}

// Update a habit's status
export async function updateHabitStatus(id, status) {
    try {
        const { data, error } = await supabase
            .from('habits')
            .update({ status })
            .eq('id', id);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating habit status:', error);
        return null;
    }
}

// Delete a task
export async function deleteTask(id) {
    try {
        const { data, error } = await supabase
            .from('tasks')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error deleting task:', error);
        return null;
    }
}

// Delete a habit
export async function deleteHabit(id) {
    try {
        const { data, error } = await supabase
            .from('habits')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error deleting habit:', error);
        return null;
    }
}

// Add a new goal (progress tracking)
export async function addGoal(title, targetDate, userId) {
    try {
        const { data, error } = await supabase
            .from('goals')
            .insert([{ title, target_date: targetDate, user_id: userId }]);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding goal:', error);
        return null;
    }
}

// Update a goal's progress
export async function updateGoalProgress(id, progress) {
    try {
        const { data, error } = await supabase
            .from('goals')
            .update({ progress })
            .eq('id', id);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating goal progress:', error);
        return null;
    }
}

// Add a new reminder
export async function addReminder(title, description, reminderTime, userId) {
    try {
        const { data, error } = await supabase
            .from('reminders')
            .insert([{ title, description, reminder_time: reminderTime, user_id: userId }]);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding reminder:', error);
        return null;
    }
}

// Delete a reminder
export async function deleteReminder(id) {
    try {
        const { data, error } = await supabase
            .from('reminders')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error deleting reminder:', error);
        return null;
    }
}
