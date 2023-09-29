import React from 'react'
import Button from '../Button'

const Card = ({id, title, detail, archived, handleClickAction}) => {

    const handleClick = () => {
        handleClickAction(id, event)
    }
    return (
        <div className='flex flex-col justify-between border-solid border-2 px-4 py-2 rounded-md border-purple-600 w-80'>
            <div>
                <p className='font-semibold text-xl'>{title}</p>
                <p className='text-sm truncate max-w-md'>{detail}</p>
            </div>
            <div className='flex gap-2 mt-4 justify-end'>
                <Button color='green' size='small' textColor='white' onClick={handleClick}>
                    {!archived ? "Archive" : "Unarchive"}
                </Button>
                <Button color='yellow' size='small' textColor='white'>
                    Edit
                </Button>
                <Button color='red' size='small' textColor='white'>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default Card