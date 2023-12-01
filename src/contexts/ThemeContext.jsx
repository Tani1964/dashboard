import { createContext, useState } from "react";

const defaultThemeContextValue = {
    themeSettings: false,
    setThemeSettings: () => {}
}

export const ThemeContext = createContext(defaultThemeContextValue)

export const ThemeContextProvider = ({children}) => {
    const [themeSettings, setThemeSettings] = useState(defaultThemeContextValue)
    return <ThemeContext.Provider value={{themeSettings, setThemeSettings}}>
        {children}
    </ThemeContext.Provider>
}