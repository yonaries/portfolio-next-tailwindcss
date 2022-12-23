"use client";
import React, { useContext, useEffect, useState } from "react";

interface ThemeType {
  isDark: boolean;
  switchTheme: Function;
}
const initialState: ThemeType = {
  isDark: false,
  switchTheme: () => {},
};

const ThemeContext = React.createContext<ThemeType>(initialState);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: any) => {
  const [isDark, setDarkTheme] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const switchTheme = (isOn: boolean) => {
    if (isOn) {
      localStorage.removeItem("darkTheme");
      document.body.classList.remove("dark");
      setDarkTheme(false);
    } else {
      localStorage.setItem("darkTheme", "true");
      document.body.classList.add("dark");
      setDarkTheme(true);
    }
  };

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem("darkTheme");
      switchTheme(!theme);
      setIsLoaded(true);
    };
    checkTheme();
    return checkTheme;
  }, []);

  const value = {
    isDark: isDark,
    switchTheme: switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
