import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState(() => {
    const savedUserID = localStorage.getItem('userID');
    return savedUserID ? JSON.parse(savedUserID) : null;
  });


  useEffect(() => {
    // userID her değiştiğinde, bu değeri localStorage'a kaydet.
    localStorage.setItem('userID', JSON.stringify(userID));
  }, [userID]);

  return (
    <UserContext.Provider value={{ userID, setUserID }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
