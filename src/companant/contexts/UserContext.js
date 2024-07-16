import React, { createContext, useContext, useState } from 'react';

// Create a context for the user
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Provider component to wrap around parts of the app that need access to the user context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store user information

  // Function to log in a user
  const login = (userInfo) => {
    setUser(userInfo); // Set the user information
  };

  // Function to log out a user
  const logout = () => {
    setUser(null); // Clear the user information
  };

  return (
    // Provide user, login, and logout to the context consumers
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
