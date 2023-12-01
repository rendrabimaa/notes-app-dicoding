import React from 'react'
import DarkModeButton from '../Fragments/DarkModeButton'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='w-full h-full min-h-screen bg-white dark:bg-slate-600'>
        <div className='flex py-10 w-5/6 sm:w-3/6 flex-col sm:flex-col-reverse mx-auto gap-4'>
            <DarkModeButton />
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout