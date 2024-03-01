export const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), task: action.task }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
