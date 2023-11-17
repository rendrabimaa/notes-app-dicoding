import React from 'react'
import PropTypes from 'prop-types'

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

Modal.proptypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default Modal