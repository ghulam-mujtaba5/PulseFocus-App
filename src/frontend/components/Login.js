
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import React, { useState } from 'react';
import { login } from '../../services/authService.js'; // Import the login function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors

    const { user, error } = await login(email, password);

    if (error) {
      console.error('Error during login:', error);
      setError(error.message); // Show the error message to the user
      setLoading(false);
    } else if (user) {
      console.log('User logged in:', user);
      setSuccessMessage('Login successful. Redirecting...');
      setLoading(false);
      setTimeout(() => {
        navigate('/dashboard'); // Redirect using useNavigate
      }, 2000);
    } else {
      console.error('No user returned after login');
      setError('Login failed, please try again later.');
      setLoading(false);
    }
  };

  return (
    <div style={styles.authContainer}>
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
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
          {loading ? 'Logging In...' : 'Log In'}
        </button>
      </form>
      <p style={styles.text}>
        <Link to="/Signup_Page" style={styles.link}>Sign Up</Link>
      </p>
    </div>
  );
};

// Inline CSS for UI styling
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

export default Login;
