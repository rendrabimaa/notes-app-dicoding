import React from 'react'
import Button from '../../Elements/Button';
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkModeContext } from '../../../context/DarkModeContext';

const DarkModeButton = () => {

    const {isDarkMode, toggleDarkMode} = useDarkModeContext()

    return (
        <>
            <Button
                optionalClass={`md:order-2 font-semibold py-2 px-4 w-fit self-end border border-2 bg-slate-600 dark:bg-white text-white dark:text-slate-600`}
                onClick={toggleDarkMode}
            >
                <span>
                    {isDarkMode ? 
                    <p className='flex items-center gap-2'>
                        <FaSun color='orange'/> <span className='hidden sm-block'>Light Mode</span>
                    </p>
                    : 
                    <p className='flex items-center gap-2'>
                        <FaMoon color='yellow'/> <span className='hidden sm-block'> Dark Mode</span>

                    </p>
                    }
                </span>
            </Button>
        </>
    )
}

export default DarkModeButton;