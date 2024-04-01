import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  setEdit,
  setEditInfo,
  setEditVal,
} from "../feature/todo/todoSlice";
 
function Todos() {
  const todos = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);
  const edit = useSelector((state) => state.edit);
 
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
 





  const searcher = (e) => {
    setSearch(e.target.value.trimStart());
  };

  return (
    <div className="">
      <h1 className=" flex gap-2 bg-blue-500 px-10 text-white  rounded-md font-bold">
        Todo List{" "}
        {todos.length > 0 ? (
          <div className="bg-white rounded-sm flex justify-around">
            <input
              readOnly={edit}
              onChange={(e) => searcher(e)}
              className="pl-2 rounded-sm text-black"
              placeholder="Search here."
              value={search}
              type="text"
            />
            <button
              onClick={() => {
                setSearch("");
              }}
            >
              ❌
            </button>
          </div>
        ) : null}
      </h1>

      <div id="list" className="flex mt-5 flex-col gap-2">
        {todos.length > 0 ? null : (
          <h1 className="text-red-400 text-center px-2 rounded-md shadow-md bg-red-100 ">
            No Todo Availabel!
          </h1>
        )}
        {!search.length > 0
          ? todos.map((todo, index) => (
              <div
                className={`  
      flex justify-around px-0.5 rounded-md  gap-2 ${
        theme ? "text-black" : "text-white"
      }`}
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
                    dispatch(setEditVal(todo.text));
                  }}
                >
                  ✏
                </button>
                <button
                  disabled={edit}
                  className="bg-red-500 text-white px-2 rounded-md disabled:bg-red-300 "
                  onClick={(e) => dispatch(removeTodo(todo.id))}
                >
                  🗑
                </button>
              </div>
            ))
          :     todos.map((todo, index) =>
           todo.text.match(search) ? (
                <div
                  className={`  
      flex justify-around px-0.5 rounded-md  gap-2 ${
        theme ? "text-black" : "text-white"
      }`}
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
                      dispatch(setEditVal(todo.text));
                    }}
                  >
                    ✏
                  </button>
                  <button
                    disabled={edit}
                    className="bg-red-500 text-white px-2 rounded-md disabled:bg-red-300 "
                    onClick={(e) => dispatch(removeTodo(todo.id))}
                  >
                    🗑
                  </button>
                </div>
              ) :(null)
            )}
                  
           
      </div>
    </div>
  );
}


export default Todos;
