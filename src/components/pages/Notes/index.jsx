import React, { useContext, useEffect } from "react"
import Container from "../../Layouts/Container"
import Cards from "../../Fragments/Cards"
import { useLocation } from "react-router-dom"
import { useUrlParamsContext } from "../../../context/URLParamsContext"
import { useAuthContext } from "../../../context/AuthContext"


const Notes = () => {
    
    const {handleIsLogedIn} = useAuthContext();
    const params = useLocation()
    const {setUrlParamsContext} = useUrlParamsContext()
    
    
    useEffect(() => {
        setUrlParamsContext(params.pathname)
    }, [params])

    return (
        <Container>
            <div className="flex justify-between w-full mb-4 mt-60 md:mt-56 items-end">
            </div>
            <Cards archived={false}/>
        </Container>
    )
}

export default Notes