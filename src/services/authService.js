// // src/services/authService.js
// import { supabase } from './supabaseClient';

// export const signUp = async (email, password, name) => {
//   try {
//     // Sign up user with email and password
//     const { data, error: signUpError } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (signUpError) {
//       console.error('SignUp Error:', signUpError.message);
//       return { error: signUpError.message }; // Return error message to be handled in the component
//     }

//     // Handle user information and insert into 'users' table
//     const user = data.user; // Get the user object from the response

//     if (!user) {
//       console.error('No user object found.');
//       return { error: 'Signup failed, user object is undefined or null.' };
//     }

//     // Optionally, insert the user into a 'users' table in Supabase if you want to store extra information
//     const { data: userData, error: dbError } = await supabase
//       .from('users')
//       .upsert({
//         id: user.id,
//         email: user.email,
//         name: name,
//       });

//     if (dbError) {
//       console.error('Database Error:', dbError.message);
//       return { error: dbError.message };
//     }

//     // Return the user data if everything is successful
//     return { user };

//   } catch (error) {
//     console.error('Signup Error:', error.message);
//     return { error: error.message }; // Return error message to the component
//   }
// };
// src/services/authService.js
import { supabase } from './supabaseClient.js';

// SignUp function to create a new user and store user data in the 'users' table
export const signUp = async (email, password, name) => {
  try {
    // Sign up user with email and password
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      console.error('SignUp Error:', signUpError.message);
      return { error: signUpError.message }; // Return error message to be handled in the component
    }

    // Handle user information and insert into 'users' table
    const user = data.user; // Get the user object from the response

    if (!user) {
      console.error('No user object found.');
      return { error: 'Signup failed, user object is undefined or null.' };
    }

    // Optionally, insert the user into a 'users' table in Supabase if you want to store extra information
    const { data: userData, error: dbError } = await supabase
      .from('users')
      .upsert({
        id: user.id,
        email: user.email,
        name: name,
      });

    if (dbError) {
      console.error('Database Error:', dbError.message);
      return { error: dbError.message };
    }

    // Return the user data if everything is successful
    return { user };

  } catch (error) {
    console.error('Signup Error:', error.message);
    return { error: error.message }; // Return error message to the component
  }
};

// Login function to authenticate the user with email and password
export const login = async (email, password) => {
  try {
    // Attempt to log the user in using Supabase authentication
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      console.error('Login Error:', loginError.message);
      return { error: loginError.message }; // Return error message to be handled in the component
    }

    // Return user data if login is successful
    const user = data.user;

    if (!user) {
      console.error('No user object found after login.');
      return { error: 'Login failed, user object is undefined or null.' };
    }

    return { user }; // Return the user if login is successful

  } catch (error) {
    console.error('Login Error:', error.message);
    return { error: error.message }; // Return error message to the component
  }
};
