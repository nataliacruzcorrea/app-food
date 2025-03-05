import { createContext, useContext, useState, ReactNode } from 'react';

const ThemeContext = createContext({} as any)

export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
    
 return (
   <ThemeContext.Provider value={{toggleTheme, theme}}>
    {children}
   </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext)
}