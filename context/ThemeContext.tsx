import React, { useContext, useEffect, useState } from "react";

interface ThemeType {
  darkTheme: boolean;
  isLoaded: boolean;
  changeTheme: Function;
}
const initialState: ThemeType = {
  darkTheme: false,
  isLoaded: false,
  changeTheme: () => {},
};

const ThemeContext = React.createContext<ThemeType>(initialState);

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const changeTheme = (isOn: boolean) => {
    isOn
      ? localStorage.removeItem("darkTheme")
      : localStorage.setItem("darkTheme", "true");
    isOn ? setDarkTheme(false) : setDarkTheme(true);
  };

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem("darkTheme");
      theme ? setDarkTheme(true) : setDarkTheme(false);
      setIsLoaded(true);
    };
    checkTheme();
    return checkTheme;
  }, []);

  const value = {
    darkTheme: darkTheme,
    isLoaded: isLoaded,
    changeTheme: changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
