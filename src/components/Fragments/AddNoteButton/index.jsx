import React from 'react'
import Button from '../../Elements/Button'
import PropTypes from 'prop-types'

const AddNoteButton = ({ openAddModal }) => {
  return (
    <Button 
      onClick={openAddModal}
      optionalClass='md:order-2 font-semibold text-white bg-blue-500 py-2 px-4 w-fit self-end border border-3 border-blue-600' 
    >
        Add Note
    </Button>
  )
}

AddNoteButton.propTypes = {
  openAddModal: PropTypes.func.isRequired,
}

export default AddNoteButton