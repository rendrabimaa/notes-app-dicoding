import React, { createContext, useContext, useEffect, useState } from "react";
import { getAccessToken, login, putAccessToken } from "../utils/network-data";

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getToken()

    }, [])

    const getToken = async () => {
        const token = await getAccessToken() 
        if (token) {
            setUser(token);
        }
    }

    const handleLogin = async (email, password) => {
        const response = await login({ email: email, password: password });

        if (!response.error) {
            await putAccessToken()
            getToken()
        }

    } 
    
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, getToken }}>
            {children}
        </AuthContext.Provider>
    )    
} 

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider;