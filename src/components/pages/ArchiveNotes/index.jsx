import React, { useEffect } from "react"
import TitlePage from "../../Fragments/TitlePage"
import Container from "../../Layouts/Container"
import Cards from "../../Fragments/Cards"
import { useLocation } from "react-router-dom"
import { useUrlParamsContext } from "../../../context/URLParamsContext"


const ArchiveNotes = () => {
    const params = useLocation()
    const {urlParamsContext, setUrlParamsContext} = useUrlParamsContext()
    
    useEffect(() => {
        setUrlParamsContext(params.pathname)
    }, [params])

    return (
        <Container>
            <div className="flex justify-between mb-12 items-end">
                <TitlePage title="Archive Notes" />
            </div>
            <Cards archived={true}/>
        </Container>
    )
}

export default ArchiveNotes