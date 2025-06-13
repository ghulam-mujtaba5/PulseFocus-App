// // // // // src/frontend/pages/Signup_Page.js
// // // // import React, { useState, useEffect } from 'react';
// // // // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // // // import Signup from '../components/Signup'; // Import Signup component

// // // // const SignupPage = () => {
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);  // Track loading state

// // // //   // Check if the user is logged in when the component mounts
// // // //   useEffect(() => {
// // // //     const getSession = async () => {
// // // //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// // // //       console.log('Session:', session); // Debug the session state
// // // //       if (session) {
// // // //         setUser(session.user); // Set user if logged in
// // // //       }
// // // //       setLoading(false);  // Stop loading once session is checked
// // // //     };

// // // //     getSession();
// // // //   }, []);

// // // //   // Show a loading indicator or signup component until session is ready
// // // //   if (loading) {
// // // //     return <div>Loading...</div>; // You can replace this with a loading spinner
// // // //   }

// // // //   // Show Signup component if user is not logged in
// // // //   if (!user) {
// // // //     return <Signup />;
// // // //   }

// // // //   // If the user is logged in, render the content or redirect to another page
// // // //   return (
// // // //     <div className="dashboard">
// // // //       <h1>Welcome to Your Dashboard</h1>
// // // //       {/* Add your dashboard content here */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignupPage;

// // // // src/frontend/pages/Signup_Page.js
// // // import React, { useState, useEffect } from 'react';
// // // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // // import Signup from '../components/Signup'; // Import Signup component

// // // const SignupPage = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);  // Track loading state

// // //   // Check if the user is logged in when the component mounts
// // //   useEffect(() => {
// // //     const getSession = async () => {
// // //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// // //       console.log('Session:', session); // Debug the session state
// // //       if (session) {
// // //         setUser(session.user); // Set user if logged in
// // //       }
// // //       setLoading(false);  // Stop loading once session is checked
// // //     };

// // //     getSession();
// // //   }, []);

// // //   // Show a loading indicator or signup component until session is ready
// // //   if (loading) {
// // //     return <div>Loading...</div>; // You can replace this with a loading spinner
// // //   }

// // //   // Show Signup component if user is not logged in
// // //   if (!user) {
// // //     return <Signup />;
// // //   }

// // //   // If the user is logged in, render the content or redirect to another page
// // //   return (
// // //     <div className="dashboard">
// // //       <h1>Welcome to Your Dashboard</h1>
// // //       {/* Add your dashboard content here */}
// // //     </div>
// // //   );
// // // };

// // // export default SignupPage;
// // import React, { useState, useEffect } from 'react';
// // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// // import Signup from '../components/Signup'; // Import Signup component

// // const SignupPage = () => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);  // Track loading state
// //   const navigate = useNavigate(); // useNavigate hook for programmatic navigation

// //   // Check if the user is logged in when the component mounts
// //   useEffect(() => {
// //     const getSession = async () => {
// //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// //       console.log('Session:', session); // Debug the session state
// //       if (session) {
// //         setUser(session.user); // Set user if logged in
// //         navigate('/login'); // Redirect to login page if already logged in
// //       }
// //       setLoading(false);  // Stop loading once session is checked
// //     };

// //     getSession();
// //   }, [navigate]); // Add navigate as dependency to trigger after redirect

// //   // Show a loading indicator or signup component until session is ready
// //   if (loading) {
// //     return <div>Loading...</div>; // You can replace this with a loading spinner
// //   }

// //   // Show Signup component if user is not logged in
// //   if (!user) {
// //     return <Signup />;
// //   }

// //   return null; // Don't render anything here since the user will be redirected
// // };

// // export default SignupPage;

// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import Signup from '../components/Signup'; // Import Signup component

// const SignupPage = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);  // Track loading state
//   const navigate = useNavigate(); // useNavigate hook for programmatic navigation

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
//       console.log('Session:', session); // Debug the session state
//       if (session) {
//         setUser(session.user); // Set user if logged in
//         // Delay navigation to allow the session to be set
//         setTimeout(() => {
//           navigate('/login'); // Redirect to login page if already logged in
//         }, 0); // This ensures the redirection is executed after session state updates
//       }
//       setLoading(false);  // Stop loading once session is checked
//     };

//     getSession();
//   }, [navigate]); // Add navigate as dependency to trigger after redirect

//   // Show a loading indicator or signup component until session is ready
//   if (loading) {
//     return <div>Loading...</div>; // You can replace this with a loading spinner
//   }

//   // Show Signup component if user is not logged in
//   if (!user) {
//     return <Signup />;
//   }

//   return null; // Don't render anything here since the user will be redirected
// };

// export default SignupPage;



import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient.js'; // Add .js extension here
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Signup from '../components/Signup.js'; // Add .js extension here
const SignupPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
      console.log('Session:', session); // Debug the session state
      if (session) {
        setUser(session.user); // Set user if logged in
        // Delay navigation to allow the session to be set
        setTimeout(() => {
          navigate('/Login_Page'); // Redirect to login page if already logged in
        }, 0); // This ensures the redirection is executed after session state updates
      }
      setLoading(false);  // Stop loading once session is checked
    };

    getSession();
  }, [navigate]); // Add navigate as dependency to trigger after redirect

  // Show a loading indicator or signup component until session is ready
  if (loading) {
    return <div style={styles.background}>Loading...</div>; // You can replace this with a loading spinner
  }

  // Show Signup component if user is not logged in
  if (!user) {
    return (
      <div style={styles.background}>
        <Signup />
      </div>
    );
  }

  return null; // Don't render anything here since the user will be redirected
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

export default SignupPage;
