import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isDarkTheme: true,
    darkTheme: { background: "#333", color: "#c5dae8" },
    lightTheme: { background: "#c5dae8", color: "#333" },
  });

  const toggleTheme = () => {
    setTheme({
      isDarkTheme: !theme.isDarkTheme,
      darkTheme: { background: "#333", color: "#c5dae8" },
      lightTheme: { background: "#c5dae8", color: "#333" },
    });
  };
  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
