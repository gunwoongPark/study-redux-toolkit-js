import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action) => {
      const deleteIndex = state.findIndex((todo) => todo.id === action.payload);
      state.splice(deleteIndex, 1);
    },

    modifyTodo: (state, action) => {
      const modifyIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );

      state[modifyIndex].todo = action.payload.todo;
    },

    toggleTodo: (state, action) => {
      const toggleIndex = state.findIndex((todo) => todo.id === action.payload);

      state[toggleIndex].isCheck = !state[toggleIndex].isCheck;
    },
  },
});

export default todoSlice;
export const { addTodo, deleteTodo, modifyTodo, toggleTodo } =
  todoSlice.actions;
