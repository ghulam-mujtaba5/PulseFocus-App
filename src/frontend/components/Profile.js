//src\frontend\components\Profile.js
import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { user, error } = await getCurrentUser();
      if (error) {
        // Handle error
        console.error(error);
      } else {
        setUser(user);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="profile-container">
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          {/* Add more user data here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
