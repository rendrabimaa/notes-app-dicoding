import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const ProtectedRoute = () => {
    const { user, getToken } = useAuthContext();

    // useEffect(() => {
    //     const getData = async () => {
    //         await getToken();
    //         console.log(user)
    //     }

    //     getData()
    // }, [])

    return user ? <Outlet /> : <Navigate to='/auth/login'/>;
}

export default ProtectedRoute