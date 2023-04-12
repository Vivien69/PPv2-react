import { useContext } from 'react';
import { useAuthContext } from './AuthContext';
import { useLocalStorage } from './useLocalStorage';

export const useUser = () => {
  const { setUser, setToken } = useAuthContext();
  const { removeItem } = useLocalStorage();

  const addUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const addToken = (accessToken) => {
    if(accessToken) {
      localStorage.setItem('token', accessToken);
      setToken(accessToken);
    }  else {
      removeItem('token')
    }
  };

  const removeUser = () => {
    setUser({})
    setToken(null)
    localStorage.removeItem('user')
  };

  return { addUser, removeUser, addToken };
};