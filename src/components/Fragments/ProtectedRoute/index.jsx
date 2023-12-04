import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const ProtectedRoute = () => {
    const { userToken, getToken } = useAuthContext();

    useEffect(() => {
        getToken();
    }, [userToken])

    return userToken ? <Outlet /> : <Navigate to='/auth/login'/>;
}

export default ProtectedRoute