import React, { createContext, useReducer } from "react";
import { todosReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, task: "Get groceries" },
    { id: 2, task: "Do laundry" },
    { id: 3, task: "Study" },
  ]);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
