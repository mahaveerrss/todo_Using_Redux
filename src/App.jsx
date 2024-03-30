import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`flex  w-full h-full flex-col justify-center items-center gap-5 ${
        theme ? "bg-white" : "bg-gray-700"
      }  transition-colors ease-linear `}
    >
      <h1 className="bg-red-500 px-2 py-1 text-white rounded-md shadow-sm  shadow-black cursor-default ">
        React Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
