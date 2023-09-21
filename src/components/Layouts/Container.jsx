import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='flex flex-col bg-red-100 p-4 w-full'>
        { children }
    </div>
  )
}

export default Container