import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
}

const DEFAULT_THEME = 'theme_mode'

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState(() => {
        const defaultTheme = localStorage.getItem(DEFAULT_THEME)
        return defaultTheme ?? 'dark'
    })

    const toggleTheme = () => setTheme((prevTheme: string) => (prevTheme === 'dark' ? 'light' : 'dark'))

    useEffect(() => {
        localStorage.setItem(DEFAULT_THEME, theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}