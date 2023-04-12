import { useState } from 'react';

export const useLocalStorage = () => {
  const [value, setValue] = useState(null);

  const setItem = (key, value) => {
    console.log('setItem :'+key+' et la valeur : '+value)
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    value !== 'undefined' ? setValue(value) : removeItem(key)
    return value;
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };

};