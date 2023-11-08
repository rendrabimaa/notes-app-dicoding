import React from 'react';
import Modal from "../Elements/Modal";

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