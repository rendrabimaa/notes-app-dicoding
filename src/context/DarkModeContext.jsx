import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === "true") {
            setIsDarkMode(JSON.parse(savedMode));
            document.documentElement.classList.add("dark")
        } else {
            // Deteksi preferensi tema gelap dari browser
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            darkModeMediaQuery.matches ?
            document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
            setIsDarkMode(darkModeMediaQuery.matches);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
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