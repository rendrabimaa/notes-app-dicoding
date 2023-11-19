import React from "react";
import PropTypes from 'prop-types';

const Toggle = ({ children, toggleDarkMode }) => {
    return (
        <div>
            <button className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-md" onClick={toggleDarkMode}>
                { children }
            </button>
        </div>
    )
}

Toggle.propTypes = {
    children: PropTypes.node,
    toggleDarkMode: PropTypes.func,
}

export default Toggle;