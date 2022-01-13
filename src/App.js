import React, { useState } from 'react';
import logo from './logo.svg';
import TodoItem from './component/TodoItem';
import FormInput from './component/FormInput';
import './App.css';
import EditModal from './component/EditModal';
import DeleteModal from './component/DeleteModal';




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
  const [deleteData, setdeleteData] = useState({id: ""})

  const [isEdit, setisEdit] = useState(false)
  const [isDelete, setisDelete] = useState(false)

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
  const deleteTask = () => {
    const {id} = deleteData
    setTodo(todo.filter(item => item.id !== id))
    setisDelete(false)
  }

  const openModalEdit = (id, data) => {
   setisEdit(true)
   seteditData({
        id,
        title: data
      }
    )
  }
  const openModalDelete = (id) => {
    setisDelete(true)
    setdeleteData({id})
   }

  const closeModal = () => {
    setisEdit(false)
    setisDelete(false)
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
              openEdit={openModalEdit}
              openDelete={openModalDelete}
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

      <DeleteModal
        delate = {isDelete}
        close={closeModal}
        deleteTask={deleteTask}
      />
      
    </div>
  );
}

export default App;
