import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateTask } from '../features/TaskReducer';

const Update = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const existingTask = tasks.filter(f => f.id == id);
  const { name, description, isDone } = existingTask[0];

  const [uname, setName] = useState(name)
  const [udescription, setDescription] = useState(description)
  const [uisDone, setIsDone] = useState(isDone)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateTask({
      id: id,
      name: uname,
      description: udescription,
      isDone: uisDone
    }))
    navigate('/')
  }
  return (
    <div style={{display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center", height:"100vh", gap:30, width:"100%",
    }}>
      <div style={{background:"#0ce9d6e0", padding:10, width:400, borderRadius:10}}>
        <h2>Update task</h2>
        <form onSubmit={handleUpdate} style={{display:"flex", flexDirection:"column",
    alignItems:"flex-start", gap:30, width:"100%"}}>
          <div>
            <label htmlFor="name">Name:</label>
            <input value={uname} onChange={e => setName(e.target.value)} type="text" name='name' placeholder='Task Name' />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input value={udescription} onChange={e => setDescription(e.target.value)} type="text" name='description' placeholder='task Description' />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input onChange={() => setIsDone(true)} type="checkbox" name='description' placeholder='task Description' />
          </div>

          <button style={{background:"#2169eed0", border:"none", height:30, width:90,color:"white", borderRadius:10}}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Update