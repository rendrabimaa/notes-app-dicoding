import React, { useEffect } from 'react'
import Card from '../../Elements/Card'
import NotFoundText from '../../Elements/NotFoundText'
import { useAppContext, useAppDispatch } from '../../../context/AppContext'

const Cards = ({ archived }) => {
  const notes = useAppContext()
  const dispatch = useAppDispatch()
  let filteredNotes = notes.filter(note => note.archived === archived)

  const handleArchivedChanges = (id, event) => {
    dispatch({
      type: 'ARCHIVE_NOTES',
      payload: {noteId : id}
    })
  }

  return (
  <div className='flex flex-wrap gap-4'>
        {filteredNotes && filteredNotes.length > 0 ? (filteredNotes.map((data, index) => {
            return (
              <Card id={data.id} title={data.title} archived={data.archived} detail={data.body} key={data.id} handleClickAction={handleArchivedChanges} />
            )
        })) : <NotFoundText />}

    </div>
  )
}

export default Cards