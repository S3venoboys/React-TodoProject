import React from 'react'
import Button from './Button'


const TodoItem = ({todo, openEdit, openDelete}) => {
    return (
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text="edit" variant="success" action={() => openEdit(todo.id, todo.title)} />
                <Button text="delete" variant="warning" action={() => openDelete(todo.id)} />
            </div>
        </div>
    )
}

export default TodoItem

const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}
