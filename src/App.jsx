import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
  <div className="min-h-screen bg-slate-100 p-5">
    <div className="w-full max-w-md mx-auto bg-white p-4 border">
      
      <h1 className="text-xl font-semibold text-center mb-3">
        Todo App
      </h1>

      <form
        onSubmit={handleAddTodo}
        className="flex mb-3"
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write todo..."
          className="flex-1 border border-gray-400 p-2 text-sm"
        />

        <button
          type="submit"
          className="ml-2 bg-blue-600 text-white px-3 text-sm"
        >
          Add
        </button>
      </form>

      {todos.length === 0 && (
        <p className="text-sm text-gray-500 text-center">
          No todos added yet
        </p>
      )}

      <ul>
        {todos.map((todoItem) => (
          <li
            key={todoItem.id}
            className="flex justify-between items-center border-b py-2 text-sm"
          >
            <span>{todoItem.text}</span>

            <button
              onClick={() => handleDeleteTodo(todoItem.id)}
              className="bg-red-500 text-white px-2 text-xs"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  </div>
);
}

export default App;
