
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState ={
    todos:[
        {
            id:1,
            text:"Hello World",
            completed:false
        },
        {
            id:2,
            text:"O! My yes",
            completed:false
        },
    ],
};
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo:(state , action) => {
            console.log("payload" , action.payload);
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,           
            }
            state.todos.push(todo);
        },

        removeTodo: (state,action) => {
            state.todos =state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const { addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer;