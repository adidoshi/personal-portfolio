import { createContext, useContext, useState } from "react";

// themes
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    sidebarBg: "inherit",
    cardBg: "rgb(247, 247, 247)",
    cardBoxShadow: "10px 10px 5px -6px rgba(204, 204, 204, 1)",
  },
  dark: {
    foreground: "#ffffff",
    background: "#15202b",
    sidebarBg: "#15202b",
    cardBg: "rgb(94, 88, 88)",
    cardBoxShadow: "8px 8px 5px -6px rgba(204, 204, 204, 1)",
  },
};

const initialState = {
  theme: themes.light,
  setTheme: () => {},
};

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const checkUserPreference =
    localStorage.getItem("userTheme") === "light" ? themes.light : themes.dark;
  const [theme, setTheme] = useState(checkUserPreference);

  const iconColor = theme === themes.light ? "black" : "white";

  return (
    <ThemeContext.Provider value={{ theme, setTheme, iconColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a theme provider");
  }
  return context;
};

export default useTheme;
