import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/Todoslice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "list",
    JSON.stringify(store.getState().todo.todos)
  );
});

export default store;