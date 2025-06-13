
import { Link, useNavigate } from 'react-router-dom'; // useNavigate from react-router-dom
import React, { useState, useEffect } from 'react';
import { signUp } from '../../services/authService.js'; // Import signUp function
import { supabase } from '../../services/supabaseClient.js'; // Import Supabase client

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate(); // For redirect after successful signup

  useEffect(() => {
    // Check if the "users" table exists when the component mounts
    const checkTableExists = async () => {
      try {
        const { data, error } = await supabase.from('users').select('*').limit(1);
        
        if (error && error.code === 'PGRST116') {
          // If the table does not exist, create it
          const { error: createTableError } = await supabase.rpc('create_users_table');
          if (createTableError) {
            setError('Failed to create table: ' + createTableError.message);
          }
        }
      } catch (err) {
        console.error('Error checking table:', err);
      }
    };
    
    checkTableExists();
  }, []); // Empty dependency array to run once

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors

    const { user, error } = await signUp(email, password, name);

    if (error) {
      console.error('Error during signup:', error);
      setError(error.message || 'Signup failed, please try again later.');
      setLoading(false);
    } else if (user) {
      console.log('User signed up:', user);
      setSuccessMessage('Signup successful, please log in.');
      setLoading(false);
      setTimeout(() => {
        navigate('/Login_Page'); // Use navigate for redirection
      }, 2000);
    } else {
      console.error('No user returned after signup');
      setError('Signup failed, please try again later.');
      setLoading(false);
    }
  };

  return (
    <div style={styles.authContainer}>
      <h2 style={styles.header}>Sign Up</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
          style={styles.input}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        {successMessage && <p style={styles.success}>{successMessage}</p>}
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <p style={styles.text}>
        Already have an account? <Link to="/Login_Page" style={styles.link}>Login</Link>
      </p>
    </div>
  );
};

// Inline CSS for real-world UI/UX
const styles = {
  authContainer: {
    width: '100%',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '10px',
    backgroundColor: '#0056b3',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  success: {
    color: 'green',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: '0.9rem',
    marginTop: '20px',
  },
  link: {
    color: '#0056b3',
    textDecoration: 'none',
  },
};

export default Signup;
