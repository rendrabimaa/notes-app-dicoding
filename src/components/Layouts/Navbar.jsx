import React from "react";
import { Link } from "react-router-dom";
// Import necessary FontAwesome libraries
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the imported icons to the FontAwesome library
library.add(fas);


const Navbar = () => {
    return (
        <div className="w-1/6 bg-red-500 h-screen px-6">
            <div className="w-full bg-white dark:bg-slate-800">
                <p className="text-2xl font-bold mt-4 text-red dark:text-white">Notes App</p>
            </div>
            <ul>
                <li>
                    <Link to="/">Notes</Link>
                </li>
                <li>
                    <Link to="/archive">Archive Notes</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar