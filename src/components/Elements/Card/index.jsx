import React from 'react'
import Button from '../Button'

const Card = ({id, title, detail, archived, handleClickAction}) => {

    const handleArchive = () => {
        handleClickAction(id, 'archive')
    }
    const handleEdit = () => {
        handleClickAction(id, 'edit')
    }
    const handleDelete = () => {
        handleClickAction(id, 'delete')
    }
    return (
        <div className='flex flex-col justify-between border-solid border-2 px-4 py-2 rounded-md border-purple-600 w-80'>
            <div>
                <p className='font-semibold text-xl'>{title}</p>
                <p className='text-sm truncate max-w-md'>{detail}</p>
            </div>
            <div className='flex gap-2 mt-4 justify-end'>
                <Button optionalClass='bg-blue-500 text-white' size='small' onClick={handleArchive}>
                    {!archived ? "Archive" : "Unarchive"}
                </Button>
                <Button optionalClass='bg-yellow-500 text-white' size='small' textColor='white' onClick={handleEdit}>
                    Edit
                </Button>
                <Button optionalClass='bg-red-500 text-white' size='small' textColor='white' onClick={handleDelete}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default Card