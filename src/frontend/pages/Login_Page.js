// // // src/frontend/pages/Login_Page.js
// // import React, { useEffect, useState } from 'react';
// // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // import Login from '../components/Login'; // Import Login component

// // const LoginPage = () => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // Check if the user is logged in when the component mounts
// //   useEffect(() => {
// //     const getSession = async () => {
// //       const { data: { session } } = await supabase.auth.getSession(); // Get current session
// //       if (session) {
// //         setUser(session.user); // Set user if logged in
// //       }
// //       setLoading(false); // Stop loading
// //     };

// //     getSession();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>; // Show a loading indicator while session is checked
// //   }

// //   if (user) {
// //     return (
// //       <div>
// //         <h1>You are already logged in!</h1>
// //         {/* Add navigation to dashboard or other logged-in content */}
// //       </div>
// //     );
// //   }

// //   return <Login />; // Render the Login component if no user is logged in
// // };

// // export default LoginPage;
// // src/frontend/pages/Login_Page.js

// import React, { useEffect, useState } from 'react';
// import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import Login from '../components/Login'; // Import Login component

// const LoginPage = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // useNavigate hook for programmatic navigation

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession(); // Get current session
//       if (session) {
//         setUser(session.user); // Set user if logged in
//         navigate('/dashboard'); // Redirect to the dashboard if already logged in
//       }
//       setLoading(false); // Stop loading
//     };

//     getSession();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading indicator while session is checked
//   }

//   if (user) {
//     return null; // Do not render anything if the user is logged in and already redirected
//   }

//   return <Login />; // Render the Login component if no user is logged in
// };

// export default LoginPage;
// src/frontend/pages/Login_Page.js

// import React, { useEffect, useState } from 'react';
// import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import Login from '../components/Login'; // Import Login component

// const LoginPage = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // useNavigate hook for programmatic navigation

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession(); // Get current session
//       if (session) {
//         setUser(session.user); // Set user if logged in
//         navigate('/dashboard'); // Redirect to dashboard if the user is logged in
//       }
//       setLoading(false); // Stop loading
//     };

//     getSession();
//   }, [navigate]); // Add navigate as dependency

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading indicator while session is checked
//   }

//   if (user) {
//     return null; // Don't render anything here since the user will be redirected to the dashboard
//   }

//   return <Login />; // Render the Login component if no user is logged in
// };

// export default LoginPage;

import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabaseClient.js'; // Import Supabase client
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Login from '../components/Login.js'; // Import Login component

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession(); // Get current session
      if (session) {
        setUser(session.user); // Set user if logged in
        navigate('/dashboard'); // Redirect to dashboard if the user is logged in
      }
      setLoading(false); // Stop loading
    };

    getSession();
  }, [navigate]); // Add navigate as dependency

  if (loading) {
    return <div style={styles.background}>Loading...</div>; // Show a loading indicator while session is checked
  }

  if (user) {
    return null; // Don't render anything here since the user will be redirected to the dashboard
  }

  return (
    <div style={styles.background}>
      <Login />
    </div>
  );
};

// Styles object for inline styling
const styles = {
  background: {
    backgroundImage: 'url(https://images.pexels.com/photos/7135020/pexels-photo-7135020.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default LoginPage;
