import React, { useState } from 'react';
import logo from './logo.svg';
import TodoItem from './component/TodoItem';
import FormInput from './component/FormInput';
import './App.css';
import EditModal from './component/EditModal';




function App() {
  const [todo, setTodo] = useState([
    {
      id : 1,
      title: "reading book"
    },
    {
      id : 2,
      title: "swimming"
    }
  ])

  const [editData, seteditData] = useState({
    id: "",
    title: ""
  })

  const [isEdit, setisEdit] = useState(false)

  const update = () => {
    const {id, title} = editData
    const newData = {id, title}
    const newTodos = todo
    newTodos.splice((id-1),1, newData)
    setTodo(newTodos)
    setisEdit(false)
    seteditData({
      id:"",
      title:""
    })
  }

  const openModal = (id, data) => {
   setisEdit(true)
   seteditData({
        id,
        title: data
      }
    )
  }

  const closeModal = () => {
    setisEdit(false)
  }

  const deleteTask = id => {
    setTodo(todo.filter(item => item.id !== id))
  }

  const addTask = data => {
    const id = todo.length
    const newData = {
      id: id + 1,
      title: data
    }
    setTodo([...todo, newData])
  }

  const setTitle = e => {
    seteditData({
      ...editData,
      title: e.target.value
    })
  }

  return (
    <div className="app">
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h3>Task List</h3>
      </div>

      <div className='List'>
          {todo.map(e => 
            <TodoItem 
              key={e.id}
              todo={e}
              open={openModal}
              del={deleteTask}
            />  
          )}
      </div>

      <div className='input-form'>
        <FormInput
          add={addTask}
        />
      </div>

      <EditModal
        edit = {isEdit}
        close={closeModal}
        change={setTitle}
        data={editData}
        update={update}
      />
      
    </div>
  );
}

export default App;
