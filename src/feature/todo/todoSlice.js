import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: JSON.parse(localStorage.getItem('TodoLists')) !== null? JSON.parse(localStorage.getItem('TodoLists'))  :  [], theme: false, edit: false, editInfo: "" };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setTheme: (state) => {
      state.theme = !state.theme;
    },
    setEdit: (state) => {
      state.edit = !state.edit;
    },
    setEditInfo: (state, action) => {
      state.editInfo = action.payload;
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const {
  addTodo,
  removeTodo,
  setTheme,
  setEdit,
  updateTodo,
  setEditInfo,
} = todoSlice.actions;

export default todoSlice.reducer;
