import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({data, handleClickAction}) => {

    const handleArchive = () => {
        handleClickAction(data.id, 'archive')
    }
    const handleEdit = () => {
        handleClickAction(data.id, 'edit')
    }
    const handleDelete = () => {
        handleClickAction(data.id, 'delete')
    }
    return (
        <>
            <div className='flex flex-col justify-between border-solid border-4 px-4 py-2 rounded-md border-slate-600 w-full md:w-72'>
                <div>
                    <Link to={`/note/${data.id}`} className='font-semibold text-xl md:mb-2'>{data.title}</Link>
                    <p className='text-sm line-clamp-2 md:line-clamp-3 max-w-md'>{data.body}</p>
                </div>
                <div className='flex gap-2 mt-4 justify-end'>
                    <Button optionalClass='bg-blue-500 text-white' size='small' onClick={handleArchive}>
                        {!data.archived ? "Archive" : "Unarchive"}
                    </Button>
                    <Button optionalClass='bg-yellow-500 text-white' size='small' textColor='white' onClick={handleEdit}>
                        Edit
                    </Button>
                    <Button optionalClass='bg-red-500 text-white' size='small' textColor='white' onClick={handleDelete}>
                        Delete
                    </Button>
                </div>
            </div>
            
        </>
    )
}

Card.propTypes = {
    data: PropTypes.object,
    handleClickAction: PropTypes.func,
}


export default Card