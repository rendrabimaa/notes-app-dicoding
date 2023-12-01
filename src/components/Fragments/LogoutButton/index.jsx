import React from 'react';
import { MdLogout } from "react-icons/md";
import Button from '../../Elements/Button';
import {useAuthContext} from '../../../context/AuthContext';


const LogoutButton = () => {

  const {handleLogout} = useAuthContext()

  return (
    <Button
        optionalClass={`md:order-2 font-semibold py-2 px-4 w-fit self-end border border-2 bg-red-500 dark:bg-white text-white dark:text-slate-600`}
        onClick={handleLogout}
    >
        <MdLogout color="white" />
    </Button>
  )
}

export default LogoutButton