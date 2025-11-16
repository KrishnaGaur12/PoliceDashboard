import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers } from '../data/users';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { emailOrGovId, password } = credentials;
        
        const foundUser = mockUsers.find(
          (u) => 
            (u.email === emailOrGovId || u.govId === emailOrGovId) && 
            u.password === password
        );

        if (foundUser) {
          const userWithoutPassword = { ...foundUser };
          delete userWithoutPassword.password;
          
          setUser(userWithoutPassword);
          localStorage.setItem('user', JSON.stringify(userWithoutPassword));
          resolve({ success: true, user: userWithoutPassword });
        } else {
          reject({ success: false, error: 'Invalid credentials' });
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
