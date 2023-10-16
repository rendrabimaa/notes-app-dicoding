import React from 'react'
import Button from '../../Elements/Button'

const AddNoteButton = ({ openAddModal}) => {
  return (
    <Button 
      onClick={openAddModal}
      optionalClass='font-semibold text-white bg-slate-600 py-2 px-4 w-fit self-end' 
    >
        Add Note
    </Button>
  )
}

export default AddNoteButton