import React, { useEffect } from 'react'
import Card from '../../Elements/Card'
import NotFoundText from '../../Elements/NotFoundText'
import { useAppContext, useAppDispatch } from '../../../context/AppContext'
import { useSearchContext } from '../../../context/SearchContext'

const Cards = ({ archived }) => {
  const notes = useAppContext()
  const dispatch = useAppDispatch()
  const searchValue = useSearchContext()
  let filteredNotes = notes.filter(note => note.archived === archived)
  
  useEffect(() => {
    const filtered = filteredNotes.filter(note => note.title.includes(searchValue))
    filteredNotes = filtered
  }, [searchValue])
  
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
        console.log(action)
        break;
      default: 
        console.log('error')
    }
  }



  return (
  <div className='flex flex-wrap gap-4'>
        {filteredNotes && filteredNotes.length > 0 ? (filteredNotes.map((data, index) => {
            return (
              <Card id={data.id} title={data.title} archived={data.archived} detail={data.body} key={data.id} handleClickAction={handleClickAction} />
            )
        })) : <NotFoundText />}

    </div>
  )
}

export default Cards