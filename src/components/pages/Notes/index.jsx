import React, { useContext, useEffect, useState } from "react"
import Container from "../../Layouts/Container"
import { useLocation } from "react-router-dom"
import { useUrlParamsContext } from "../../../context/URLParamsContext"
import Card from "../../Elements/Card"
import { useSearchContext } from "../../../context/SearchContext"
import NotFoundText from "../../Elements/NotFoundText"
import { archiveNote, deleteNote, getActiveNotes } from "../../../utils/network-data"


const Notes = () => {
    const [notes, setNotes] = useState()
    const params = useLocation()
    const {setUrlParamsContext} = useUrlParamsContext()
    const [filteredNotes, setFilteredNotes]= useState(null);
    const {searchContext} = useSearchContext();
    
    
    useEffect(() => {
        setUrlParamsContext(params.pathname)
    }, [params])

    const fetchNotes = async () => {
        const response = await getActiveNotes();
        if(!response.error) {
            setNotes(response.data)
        }
    }

    useEffect(() => {
        
        fetchNotes()
    }, [notes])

    useEffect(() => {
        const filtered = searchContext.length > 0
            ? notes.filter(result => result.title.toLowerCase().includes(searchContext.toLowerCase()))
            : notes;
        setFilteredNotes(filtered);
    }, [searchContext, notes]);



    const handleClickAction = (id, action) => {
        switch(action) {
          case "archive":
            const handleArchiveNotes = async () => {
              const response = await archiveNote(id);
              if(!response.error) {
                fetchNotes()
              }
            }
            handleArchiveNotes();
            break;
          case "delete":
            const handleDeleteNote = async () => {
              const response = await deleteNote(id);
              if(!response.error) {
                  fetchNotes()
              }
            }
            handleDeleteNote()
            break;
          default: 
            console.log('error')
        }
      }


    return (
        <Container>
            <div className="flex justify-between w-full mb-4 mt-60 md:mt-56 items-end">
            </div>
            {/* <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} note={selectedItem} isEditModal={true}/> */}
            <div className='flex flex-wrap w-full gap-4'>
                    {filteredNotes && filteredNotes.length > 0 ? (filteredNotes.map((data, index) => {
                        return (
                        <Card data={data} key={data.id} handleClickAction={handleClickAction} />
                        )
                    })) : <NotFoundText />}
            </div>
            {/* <Cards archived={false}/> */}
        </Container>
    )
}

export default Notes