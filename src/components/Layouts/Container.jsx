import React from 'react';

const Container = ({ children }) => {
  return (
    <>
      <div className='flex flex-col p-2 w-full'>
          { children }
      </div>
    </>
  )
}

export default Container