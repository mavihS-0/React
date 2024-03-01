import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { TodoContext } from "../contexts/todoContext";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    dispatch({ type: "ADD_TODO", task: newTodo });
    setNewTodo("");
  };

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isDarkTheme, darkTheme, lightTheme, toggleTheme } = context;
        const currTheme = isDarkTheme ? darkTheme : lightTheme;
        return (
          <div className="contentWrapper">
            <h2 className="ui centered header">Todo List</h2>
            <button
              className={
                isDarkTheme ? "ui primary button" : "ui secondary button"
              }
              style={{
                marginBottom: "20px",
                width: "30%",
              }}
              onClick={toggleTheme}
            >
              Toggle theme
            </button>
            <div
              style={{
                background: currTheme.background,
                color: currTheme.color,
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                padding: "10px",
                borderRadius: "7px",
                width: "100%",
              }}
            >
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <div key={todo.id} className="todoItem">
                    <p>{todo.task}</p>
                    <button
                      className={
                        isDarkTheme
                          ? "ui primary button"
                          : "ui secondary button"
                      }
                      onClick={() =>
                        dispatch({ type: "REMOVE_TODO", id: todo.id })
                      }
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <center>No tasks yet</center>
              )}
            </div>
            <form
              class="ui form"
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "10px",
                width: "100%",
                justifyContent: "center",
              }}
              onSubmit={handleFormSubmit}
            >
              <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="field"
                style={{ width: "70%" }}
                type="text"
                placeholder="Add a task..."
              />
              <button
                type="submit"
                class={
                  isDarkTheme
                    ? "ui animated primary button"
                    : "ui animated secondary button"
                }
              >
                <div class="visible content">Next</div>
                <div class="hidden content">
                  <i aria-hidden="true" class="add icon"></i>
                </div>
              </button>
            </form>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TodoList;
