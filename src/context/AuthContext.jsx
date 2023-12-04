import React, { createContext, useContext, useEffect, useState } from "react";
import { getAccessToken, getUserLogged, login, putAccessToken } from "../utils/network-data";

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);
    const [userName, setUserName] = useState(null);

    const getToken = async () => {
        const token = await getAccessToken() 
        if (token) {
            setUserToken(token);
        }
    }
    
    const getUserName = async () => {
        const response = await getUserLogged();
        if(!response.error) {
            await setUserName(response.data.name)
            console.log(userName)
        }
    }

    const handleLogin = async (email, password) => {
        const response = await login({ email: email, password: password });

        if (!response.error) {
            await putAccessToken(response.data.accessToken)
            await getToken()
            getUserName()
        }

    } 


    
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setUserToken(null);
        setUserName(null)
    }

    return (
        <AuthContext.Provider value={{ userToken, handleLogin, handleLogout, getToken, userName, getUserName }}>
            {children}
        </AuthContext.Provider>
    )    
} 

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider;