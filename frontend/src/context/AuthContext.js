import { createContext, useContext, useState, useEffect } from 'react';
import API from '../api/axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  // ✅ Auto-login on page refresh
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      API.get('/auth/me')
        .then((res) => setUser(res.data))
        .catch(() => {
          logout(); // invalid token
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
