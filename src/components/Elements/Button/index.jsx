import React from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
    size: PropTypes.string,
    optionalClass: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

}

export default Button;