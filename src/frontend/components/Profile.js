// //src\frontend\components\Profile.js
// import React, { useState, useEffect } from 'react';
// import { getCurrentUser } from '../services/authService';

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { user, error } = await getCurrentUser();
//       if (error) {
//         // Handle error
//         console.error(error);
//       } else {
//         setUser(user);
//       }
//     };
//     fetchUser();
//   }, []);

//   return (
//     <div className="profile-container">
//       {user ? (
//         <>
//           <h2>Welcome, {user.name}</h2>
//           <p>Email: {user.email}</p>
//           {/* Add more user data here */}
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService.js'; // Adjust the path according to your folder structure

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { user, error } = await getCurrentUser();
        if (error) {
          setError(error.message); // Show error message
        } else {
          setUser(user); // Set user data if successful
        }
      } catch (error) {
        setError('Failed to fetch user data'); // Handle unexpected errors
      } finally {
        setLoading(false); // Stop loading once the operation is done
      }
    };

    fetchUser();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div style={styles.profileContainer}>
      {loading ? (
        <p style={styles.loadingText}>Loading...</p>
      ) : error ? (
        <p style={styles.errorText}>Error: {error}</p>
      ) : (
        <>
          <h2 style={styles.welcomeText}>Welcome, {user.name}</h2>
          <p style={styles.userInfo}>Email: {user.email}</p>
          {/* You can add more user data here */}
        </>
      )}
    </div>
  );
};

// Basic inline styling for the profile page
const styles = {
  profileContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: '1.2rem',
    color: '#777',
  },
  errorText: {
    fontSize: '1.2rem',
    color: 'red',
  },
  welcomeText: {
    fontSize: '2rem',
    color: '#333',
  },
  userInfo: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Profile;
