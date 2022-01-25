import React from 'react'
import "../styles/Button.css"

const Button = ({variant, load, text, action}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={action}>
            {load ? "loading..." : text}
        </button>
    )
}

export default Button
