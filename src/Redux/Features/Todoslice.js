import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialTodos = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list")) : [{ id: nanoid(), text: "From Cohort 3.0" }];

export const todoSlice = createSlice({
  name: "todo",

  initialState: {
    todos: initialTodos,
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
      });
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    updateTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;