import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setEdit, setEditInfo } from "../feature/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="bg-blue-500 px-10 text-white  rounded-md font-bold">
        Todo List
      </h1>

      <div className="flex mt-5 flex-col gap-2">
        {todos.length > 0 ? null : (
          <h1 className="text-red-400 text-center px-2 rounded-md shadow-md bg-red-100 ">
            No Todo Availabel!
          </h1>
        )}
        {todos.map((todo, index) => (
          <div
            className={`
      flex justify-around   gap-2 ${theme ? "text-black" : "text-white"}`}
            key={todo.id}
          >
            <span className="">{index + 1 + "."}</span>
            {todo.text}

            <button
              disabled={edit}
              className="bg-green-500 text-white px-2 rounded-md disabled:bg-green-300"
              onClick={() => {
                dispatch(setEdit());
                dispatch(setEditInfo(todo.id));
              }}
            >
              Edit
            </button>
            <button
              disabled={edit}
              className="bg-red-500 text-white px-2 rounded-md disabled:bg-red-300 "
              onClick={(e) => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
