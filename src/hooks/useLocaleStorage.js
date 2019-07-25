import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem("UImode:darkMode", state);
  }, [state]);
  const removeState = () => window.localStorage.removeItem(key);
  return [state, setState, removeState];
};

export default useLocalStorage;
