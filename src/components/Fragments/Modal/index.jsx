import React from 'react'

const Modal = ({isOpen, closeModal}) => {
  return (
    <div className={`modal-${isOpen ? 'open' : 'close'}`}>
        <div className='w-full z-10 h-20 '>
            ModalContent
            <button onClick={closeModal}>close</button>
        </div>
    </div>
  )
}


export default Modal