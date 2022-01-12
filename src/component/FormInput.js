import React, { useState } from 'react'
import Button from './Button'
import "../styles/FormInput.css"


const FormInput = ({add}) => {
    const [text, setText] = useState("")
    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(text !== "") {
            add(text)
        }
        setText("")
    }

    return (
        <form style={inputForm} onSubmit={handleSubmit}>
            <input 
                style={input}
                placeholder='add task'
                value={text}
                type="text"
                onChange={handleChange} />
            <Button text="add" variant="primary" action={handleSubmit} />
        </form>
    )
}

export default FormInput

const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width: "70%",
    border: "none"
}
