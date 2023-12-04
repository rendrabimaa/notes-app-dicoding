import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import Input from '../Input'
import Button from '../Button'
import PropTypes from 'prop-types'
import { addNote } from '../../../utils/network-data'


const Modal = ({modalIsOpen, closeModal }) => {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleContentValue = e => {
    setContentValue(e.target.value);
  }
  
  const handleTitleValue = e => {
    setTitleValue(e.target.value);
  }

  const handleAddNote = async () => {
    const { error, data } = await addNote({ title: titleValue, body: contentValue });
    if(!error) {
      setTitleValue('')
      setContentValue('')
      closeModal()
    }    
  }

  return (
    modalIsOpen && <>
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Add Modal"
            style={{ 
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                width: '90%',
                height: '600px',
                margin: 'auto',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                outline: 'none',
                padding: '20px',
                borderRadius: '10px',
                border: '2px solid gray',
                boxShadow: '5px 5px 10px 2px rgba(255, 255, 255, 0.5)',

                '@media (minWidth: 768px)': {
                  width: '700px',
                },
                }
                }}
        >
            
                <h1 className='font-bold text-xl text-center'>Add Notes</h1>
                <Input 
                    label={'Note Title'} 
                    type={'text'} 
                    placeholder={'Input Title of Note'} 
                    name={'addModal'} 
                    style={'border border-2 border-slate-300 rounded-md p-2 w-full'} 
                    styleLabel={'block mt-4 mb-2 font-semibold'}
                    value={titleValue}
                    onValueChange={handleTitleValue}
                />
                <Input 
                    label={'Note Title'} 
                    type={'text'} 
                    placeholder={'Input Content of Note'} 
                    name={'addModal'} 
                    style={'border border-2 border-slate-300 rounded-md p-2 w-full'} 
                    styleLabel={'block mt-4 mb-2 font-semibold'}
                    isContentOfNote={ true }
                    rows={'10'}
                    value={contentValue}
                    onValueChange={handleContentValue}
                />
                <Button children='Add Note' size={'large'} optionalClass={"bg-blue-500 w-full text-white font-semibold"} onClick={handleAddNote} />
            
        </ReactModal>
    </>
  )
}

Modal.propTypes = {
  isEditModal: PropTypes.bool,
  note: PropTypes.object,
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
}

export default Modal