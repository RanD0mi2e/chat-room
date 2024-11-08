import { ThemeContext } from "@/Contexts/ThemeContext";
import { useContext } from "react";

export function ToggleThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} Mode
    </button>
}