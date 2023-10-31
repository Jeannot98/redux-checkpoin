import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletetask } from '../features/TaskReducer'

const Home = () => {

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deletetask({id: id}))
  }

  return (
    <div style={{display:"flex", flexDirection:"column",
    alignItems:"center", gap:30, width:"100%"}}>
      <h2>TODO LIST</h2>
      <Link to="/create"> <button style={{background:"#2169eed0",color:"white", border:"none", height:30, width:100, borderRadius:10}}>Add Task +</button> </Link>


      <table style={{ width:"100%"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td style={{textAlign:"center"}}>{task.id}</td>
              <td style={{textAlign:"center", borderBottom:"1px solid #ddd"}}>{task.name}</td>
              <td style={{textAlign:"center", borderBottom:"1px solid #ddd"}}>{task.description}</td>
              <td style={{textAlign:"center", borderBottom:"1px solid #ddd"}}>
                {task.isDone ? <p>Done</p> : <p>Undone</p>}
              </td>
              <td style={{textAlign:"center"}}>
                <Link to={`/edit/${task.id}`}> <button style={{background:"#0ce9d6e0", border:"none", height:30, width:50, borderRadius:10}}>Edit</button> </Link>
                <button style={{background:"#e02c2cd0", border:"none", height:30, width:50, borderRadius:10}} onClick={()=>handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home