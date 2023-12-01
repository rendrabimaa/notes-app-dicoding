import React, { useEffect, useState } from 'react'
import Card from '../../Elements/Card'
import NotFoundText from '../../Elements/NotFoundText'
import { useAppContext, useAppDispatch } from '../../../context/AppContext'
import { useSearchContext } from '../../../context/SearchContext'
import Modal from '../../Elements/Modal'
import PropTypes from 'prop-types'

const Cards = ({ archived }) => {
  const notes = useAppContext()
  const dispatch = useAppDispatch()
  const [filteredNotes, setFilteredNotes] = useState([])
  const {searchContext} = useSearchContext();
  const [modalIsOpen, setModalIsOpen ] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
    const openAddModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }
  
  useEffect(() => {
    console.log(notes)
  }, [])

  // useEffect(() => {
  //   if(searchContext.length > 0) {
  //     setFilteredNotes(filteredNotes.filter((result) => result.title.toLowerCase().includes(searchContext.toLowerCase())))
  //   } else{
  //     setFilteredNotes(notes.filter(note => note.archived === archived))
  //   }
  // }, [searchContext])

  const handleClickAction = (id, action) => {
    switch(action) {
      case "archive":
        dispatch({
          type: 'ARCHIVE_NOTES',
          payload: {noteId : id}
        })
        break;
      case "delete":
        dispatch({
          type: 'DELETE_NOTES',
          payload: {noteId : id}
        })
        break;
      case "edit":
        openAddModal();
        filteredNoteById(id);
        break;
      default: 
        console.log('error')
    }
  }

  const filteredNoteById = (id) => {
    const data = notes.find((result) => result.id === id)
    setSelectedItem(data)
  }

  return (
    <>
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} note={selectedItem} isEditModal={true}/>
      <div className='flex flex-wrap w-full gap-4'>
            {filteredNotes && filteredNotes.length > 0 ? (filteredNotes.map((data, index) => {
                return (
                  <Card data={data} key={data.id} handleClickAction={handleClickAction} />
                )
            })) : <NotFoundText />}
      </div>
    </>
  )
}

Cards.propTypes = {
  archived: PropTypes.bool.isRequired,
}

export default Cards