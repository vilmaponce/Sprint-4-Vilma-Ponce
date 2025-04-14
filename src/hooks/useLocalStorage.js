// src/hooks/useLocalStorage.js
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //storedValue: Almacena el valor actual en localStorage.

    //setValue: Actualiza el valor en localStorage y en el estado.
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);//actualiza el estado de React
      window.localStorage.setItem(key, JSON.stringify(value));//actualiza el localStorage
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;