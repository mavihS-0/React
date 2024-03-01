import TodoList from "./components/TodoList";
import ThemeContextProvider from "./contexts/themeContext";
import TodoContextProvider from "./contexts/todoContext";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <TodoContextProvider>
            <TodoList />
          </TodoContextProvider>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
