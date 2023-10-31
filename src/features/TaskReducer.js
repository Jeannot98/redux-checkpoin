import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "../Data";


const taskSlice = createSlice({
    name: "tasks",
    initialState: taskList,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        updateTask: (state, action)=>{
            const {id, name, description, isDone} = action.payload;
            const ut = state.find(user=> user.id == id);
            if(ut){
                ut.name = name;
                ut.description = description;
                ut.isDone = isDone;
            }
        },
        deletetask: (state, action) =>{
            const {id} = action.payload;
            const ut = state.find(user=> user.id == id);
            if(ut){
                return state.filter(f => f.id !== id)
            }
        }
    }
})

export const {addTask, updateTask, deletetask} = taskSlice.actions

export default taskSlice.reducer;