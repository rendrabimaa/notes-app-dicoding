import React from 'react'
import Button from '../Button'

const Card = ({title, detail}) => {
  return (
    <div className='flex flex-col justify-between border-solid border-2 px-4 py-2 rounded-md border-purple-600 w-60'>
        <div>
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-sm'>{detail}</p>
        </div>
        <div className='flex gap-2'>
            <Button color='blue' size='small'>
                Archive
            </Button>
            <Button color='yellow' size='small'>
                Edit
            </Button>
            <Button color='red' size='small'>
                Delete
            </Button>
        </div>
    </div>
  )
}

export default Card