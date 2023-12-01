import React, { useEffect,useState } from 'react'
import Navbar from "./Navbar";
import Modal from '../Elements/Modal';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    const openAddModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }
    
  return (
    <div className='bg-white dark:bg-slate-600 min-h-screen'>
      <div className="flex flex-col w-full md:w-2/3 mx-auto">
          <Navbar openAddModal={openAddModal} />
          <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
          <Outlet />
      </div>
    </div>
  )
}

export default MainLayout