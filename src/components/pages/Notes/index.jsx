import React, { useContext, useEffect } from "react"
import TitlePage from "../../Fragments/TitlePage"
import Container from "../../Layouts/Container"
import Cards from "../../Fragments/Cards"
import { useLocation } from "react-router-dom"
import { useUrlParamsContext } from "../../../context/URLParamsContext"


const Notes = () => {
    const params = useLocation()
    const {urlParamsContext, setUrlParamsContext} = useUrlParamsContext()
    
    useEffect(() => {
        setUrlParamsContext(params.pathname)
    }, [params])

    return (
        <Container>
            <div className="flex justify-between mb-12 items-end">
                <TitlePage>
                    Ini Notes Page
                </TitlePage>
                
            </div>
            <Cards archived={false}/>
        </Container>
    )
}

export default Notes