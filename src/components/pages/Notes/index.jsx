import React from "react"
import TitlePage from "../../Elements/TitlePage"
import AddNoteButton from "../../Fragments/AddNoteButton"
import Container from "../../Layouts/Container"
import Cards from "../../Fragments/Cards"
import { getInitialData } from '../../../utils'

const Notes = () => {
    const datas = getInitialData()
    const notes = datas.filter((data) => data.archived)

    return (
        <Container>
            <div className="flex justify-between mb-12 items-end">
                <TitlePage>
                    Ini Notes Page
                </TitlePage>
                <AddNoteButton></AddNoteButton>
            </div>
            <Cards datas={notes} />
        </Container>
    )
}

export default Notes