import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todos_state: TodoReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch