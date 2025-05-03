// src/utils/auth.js
export const login = (user, pass) => {
    if (user === 'admin' && pass === 'admin') {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('auth');
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
  };
  