import React from 'react';
import { MdLogout } from "react-icons/md";
import Button from '../../Elements/Button';
import {useAuthContext} from '../../../context/AuthContext';


const LogoutButton = () => {

  const {userName, handleLogout} = useAuthContext()

  return (
    <Button
        optionalClass={`md:order-2 font-semibold py-2 px-4 w-fit self-end border border-2 bg-red-500`}
        onClick={handleLogout}
    >
        <div className='flex items-center gap-2'>
          {userName && <span className='text-white text-xs font-semibold'>{userName}</span>}
          <MdLogout color="white" />
        </div>
    </Button>
  )
}

export default LogoutButton