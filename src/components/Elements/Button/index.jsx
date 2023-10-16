import React from "react";

const Button = ({size, optionalClass="", onClick, children }) => {
    switch(size) {
        case "large":
            size = "h-12 w-24"
            break;
        case "small":
            size = "h-8 w-24"
            break;
        case "medium":
            size = "h-10 w-22"
            break;
    }
    return (
        <>
        <button className={`${size} rounded-lg ${optionalClass}`} onClick={onClick}>
            {children}
        </button>
        </>
    )
}

export default Button;