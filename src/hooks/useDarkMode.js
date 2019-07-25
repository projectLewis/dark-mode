import { useEffect } from "react";
import useLocalStorage from "./useLocaleStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("UImode:darkMode", false);
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.remove("dark-mode");
    } else {
      body.className = "dark-mode";
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
