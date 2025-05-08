import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { FormDataInterface } from '../../create-todo'

export interface TodoState {
  todos: FormDataInterface[]
}

const initialState: TodoState = {
  todos: [
    {
        task: 'First Task',
        date: '2020-10-10'
    }
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    //actions
    save_todo: (initialState, action) => {
      console.log(action);
    },
    get_todo: (initialState) => {
      
    },
    get_todos: (initialState) => {

    },
    edit_todo: (initialState) => {
      
    },
    delete_todo: (initialState) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    save_todo,
    get_todo,
    get_todos,
    edit_todo,
    delete_todo
 } = todoSlice.actions

export default todoSlice.reducer