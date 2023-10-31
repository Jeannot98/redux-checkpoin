import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/TaskReducer'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const  tasks = useSelector((state)=> state.tasks)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({id: tasks[tasks.length -1].id + 1 , name,  description}))
    navigate('/')
  }
  return (
    <div style={{display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center", height:"100vh", gap:30, width:"100%",
    }}>
      <div style={{background:"#0ce9d6e0", padding:10, width:400, borderRadius:10}}>
        <h2>Add New task</h2>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column",
    alignItems:"flex-start", gap:10, width:"100%"}}>
          <div>
            <label htmlFor="name">Name:</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name='name' placeholder='Task Name'/>
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" name='description' placeholder='task Description'/>
          </div> <br />

          <button style={{background:"#2169eed0", border:"none", height:30, width:90,color:"white", borderRadius:10}}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create