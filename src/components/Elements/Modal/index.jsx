import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import Input from '../Input'
import Button from '../Button'
import { useAppDispatch, useAppContext } from '../../../context/AppContext'

const Modal = ({ isEditModal, note, modalIsOpen, closeModal }) => {
  const [archiveNote, setArchiveNote] = useState(false);
  // const [result, setResult] = useState()
  const [noteId, setNoteId] = useState();
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const dispatch = useAppDispatch();
  const [filteredNotes, setFilteredNotes] = useState()


  useEffect(() => {
    if(modalIsOpen) {
       if(note) {
         setNoteId(note.id)
         setTitleValue(note.title)
         setContentValue(note.body)
         setArchiveNote(note.archived)
       }
      }

  }, [modalIsOpen])

  const handleContentValue = e => {
    setContentValue(e.target.value);
  }
  
  const handleTitleValue = e => {
    setTitleValue(e.target.value);
  }

  const addNote = () => {
    dispatch({
        type: 'ADD_NOTES',
        payload: {
            id: Date.now(),
            title: titleValue ,
            body: contentValue,
            createdAt: new Date().toISOString(),
            archived: archiveNote,
        }
    })
    closeModal()
  }

  const editNote = () => {
    dispatch({
      type: 'EDIT_NOTE',
      payload: {
        id: noteId,
        title: titleValue,
        body: contentValue,
        archived: archiveNote
      }
    })
    closeModal()
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
                width: '700px',
                height: '600px',
                margin: 'auto',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                outline: 'none',
                padding: '20px',
                borderRadius: '10px',
                border: '2px solid gray',
                boxShadow: '5px 5px 10px 2px rgba(255, 255, 255, 0.5)'
                }
                }}
        >
            {/* <div className="bg-black fixed h-screen w-screen top-0 left-0 right-0 bottom-0"></div> */}
            {/* <div className="modal-content"> */}
                <h1 className='font-bold text-xl text-center'>{isEditModal ? "Edit Notes" : "Add Notes"}</h1>
                {/* label, type, placeholder, name, style, onInputChange */}
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
                <input type="checkbox" checked={archiveNote} onChange={(e) => setArchiveNote(e.target.checked)} />
                <Button children={isEditModal ? 'Edit Note' : 'Add Note'} size={'large'} optionalClass={"bg-blue-500 w-full text-white font-semibold"} onClick={isEditModal ? editNote : addNote} />
            {/* </div> */}
        </ReactModal>
    </>
  )
}

export default Modal