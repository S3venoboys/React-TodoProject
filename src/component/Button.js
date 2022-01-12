import React from 'react'
import "../styles/Button.css"

const Button = ({variant, text, action}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={action}>
            {text}
        </button>
    )
}

export default Button
