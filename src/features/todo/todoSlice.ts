import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TodoDataInterface {
  todoId: string;
  task: string;
  date: string;
}

export interface TodoState {
  todos: TodoDataInterface[],
  todo: TodoDataInterface | null
}

// grouping together of related variables
const initialState: TodoState = {
  todos: [],
  todo: null
}

export const todoSlice = createSlice({
  name: 'todo_slice',
  initialState,
  reducers: {
    filter_todo_by_date: (initialState) => {

    },
    delete_todo: () => {

    },
    edit_todo: (initialState, action) => {
        /**
         * {\
         * todoId: 'dsad',
        *    task: 'changed value',
        *    date: 'changed date'
         * }
         */
        return {
          ...initialState,
          todos: [
            ...initialState.todos.map((function(todo) {
              if (todo.todoId === action.payload.todoId){
                return action.payload
              }

              return todo;
            }))
          ]
        }
    },
    save_todo: (initialState, action) => {
      console.log(initialState);
      console.log(action);

      return {
        ...initialState,
        todos: [ ...initialState.todos, action.payload ],
      }
    }
  },
})

// Action creators are generated for each case reducer function
//destructuring
export const { 
  save_todo,
  delete_todo,
  edit_todo,
  filter_todo_by_date
} = todoSlice.actions;

export default todoSlice.reducer;