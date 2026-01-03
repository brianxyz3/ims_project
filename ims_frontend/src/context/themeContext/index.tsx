import React, { useContext, createContext, useEffect, useState, type ReactNode } from "react";
// import { jwtDecode } from "jwt-decode";


interface ThemeProviderType {
  children: ReactNode;
}

type Theme = "light" | "dark" | undefined;

interface ThemeContextType {
    theme: Theme
    handleThemeState: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if(!context) throw new Error("No Authentication Context found")
  return context;
};

const ThemeProvider: React.FC<ThemeProviderType> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(undefined);


    useEffect(() => {
      // On mount, check the current theme
      updateTheme()
    }, [theme]);
  
  
    const handleThemeState = (newTheme: Theme) => {
      if(!newTheme) return;
      localStorage.setItem('theme', newTheme);
      editThemeClass(newTheme);
    }
  
    const editThemeClass = (newTheme: Theme) => {
      if(!newTheme) return;
      setTheme(newTheme);
      document.documentElement.classList.remove(newTheme === "light" ? "dark" : "light");
      document.documentElement.classList.add(newTheme);
    }

  const updateTheme = () => {
    try{
      const currentTheme = localStorage.getItem('theme') as Theme | null;
      if (currentTheme) return handleThemeState(currentTheme);
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? editThemeClass('dark')
        : editThemeClass('light'); 
    } catch(err) {
      console.log(err);
    }
  };


  const value  = {
    theme,
    handleThemeState,
  }
  

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;