import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import { Link, useParams } from 'react-router-dom'

const DetailNote = () => {
  const notes = useAppContext()
  const [note, setNote] = useState()
  let {id} = useParams()

  useEffect(() => { 
    filteredNoteById(id)
  }, [])

  const filteredNoteById = (id) => {
    const data = notes.find((result) => result.id == id)
    setNote(data)
  }

  const changeFormatDate = (dateString) => {
    const date = new Date(dateString)

    const options = {day: 'numeric', month: 'long', year: 'numeric'}
    const formattedDate = date.toLocaleDateString('en-US', options)

    return formattedDate
  }

  // useEffect(() => { 
  //   console.log(note)
  // }, [note])

  return (
    <div className='flex flex-col w-11/12 md:w-2/3 mx-auto mt-20 px-2 py-4 md:p-8 border-4 border-slate-700 rounded-lg text-slate-700'>
      {note && (
        <>
          <div className='flex items-start justify-between mb-12 gap-2'>
            <div className='flex flex-col md:gap-2'>
            <h3 className='text-xl md:text-3xl font-bold'>{note.title}</h3>
            <p className='text-sm'>{changeFormatDate(note.createdAt)}</p>
            </div>
            <div className='flex flex-col md:gap-2 items-end self-end'>
              <Link to={'/'} className='bg-blue-500 text-white py-1 md:py-2 px-4 rounded-lg font-semibold'>
                &lt; Back
              </Link>
              <p className={`font-semibold ${note.archived ? 'text-green-500' : 'text-red-500'}`}>{note.archived ? 'Archived' : 'Not Archived'}</p>
            </div>
          </div>
          <p className='text-md md:text-xl font-semibold'>
            {note.body}
          </p>
        </>
      )}
    </div>
  )
}

export default DetailNote