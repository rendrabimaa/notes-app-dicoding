import React, { useContext } from "react"
import TitlePage from "../../Elements/TitlePage"
import AddNoteButton from "../../Fragments/AddNoteButton"
import Container from "../../Layouts/Container"
import Cards from "../../Fragments/Cards"


const ArchiveNotes = () => {
    return (
        <Container>
            <div className="flex justify-between mb-12 items-end">
                <TitlePage>
                    Ini Archive Notes Page
                </TitlePage>
                <AddNoteButton />
            </div>
            <Cards archived={true}/>
        </Container>
    )
}

export default ArchiveNotes