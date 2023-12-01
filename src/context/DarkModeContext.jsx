import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            setIsDarkMode(JSON.parse(savedMode));
        } else {
            // Deteksi preferensi tema gelap dari browser
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(darkModeMediaQuery.matches);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        })

        document.documentElement.classList.toggle('dark');

    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkModeContext = () => {
    return useContext(DarkModeContext);
}

export default DarkModeContextProvider;