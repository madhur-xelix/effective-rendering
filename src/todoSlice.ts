import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./data";
import { RootState } from "./store";

// Define a type for the slice state
interface TodoState {
  todos: null | { [x: number]: Todo };
}

// Define the initial state using that type
const initialState: TodoState = {
  todos: null,
};

export const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateAllRows: (state, action: PayloadAction<any>) => {
      state.todos = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateSpecificRow: (
      state,
      action: PayloadAction<{ id: number; updatedRow: Todo }>
    ) => {
      const { id, updatedRow } = action.payload;
      state.todos = Object.assign(state.todos!, { [id]: updatedRow });
    },
  },
});

export const { updateSpecificRow, updateAllRows } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const todosSelect = (state: RootState) => state.todos;

export const specificRow = (state: RootState, id: number) =>
  state.todos.todos ? state.todos.todos[id] : null;

export default todoSlice.reducer;
