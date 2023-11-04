import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  filter: 'all',
  todoList: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    updateTodo: (state, action) => {
      const object = state.todoList.find((item) => action.payload.id === item.id);
      object.status = action.payload.status;
      object.title = action.payload.title;
    },
    removeToDo: (state, action) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload.id)
    },
    updateFilterStatus: (state, action) => {
      state.filter = action.payload
    }
  }
});
export const { addTodo, updateTodo, removeToDo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;