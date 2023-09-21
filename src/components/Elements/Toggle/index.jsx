import React from "react";

const Toggle = ({ children, toggleDarkMode }) => {
    return (
        <div>
            <button className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-md" onClick={toggleDarkMode}>
                { children }
            </button>
        </div>
    )
}

export default Toggle;