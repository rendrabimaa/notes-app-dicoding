import React from "react";

const Button = ({ color = "blue", size, textColor="black", onClick, children }) => {
    switch(size) {
        case "large":
            size = "h-12 w-24"
            break;
        case "small":
            size = "h-8 w-16"
            break;
        default:
            size = "h-10 w-16"
    }
    return (
        <>
        <button color={color} className={`bg-${color}-500 ${size} text-${textColor} rounded-lg`} onClick={onClick}>
            {children}
        </button>
        </>
    )
}

export default Button;