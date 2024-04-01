import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  setTheme,
  updateTodo,
  setEditInfo,
  setEdit,
} from "../feature/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const edit = useSelector((state) => state.edit);
  const editInfo = useSelector((state) => state.editInfo);
  const editVal = useSelector((state) => state.editVal);

  const onSub = (e) => {
    e.preventDefault();
    if (input.trim().length > 0 && !edit) {
      dispatch(addTodo(input.trimStart()));
      setInput("");


    } else if (input.trim().length > 0 && edit) {
      dispatch(updateTodo({ id: editInfo, text: input }));
      dispatch(setEdit());
      setInput("");
    }
  };

   useEffect(()=>{
    edit ? setInput(editVal) : setInput('');
   },[edit])

  return (
    <div className="flex   justify-center items-center gap-2">
      <form className="flex items-center justify-center gap-2" onSubmit={onSub}>
        <input
          type="text"
          className="bg-gray-200 pl-2 rounded-md"
          placeholder="Enter Todo..."
          value={ input }
          onChange={(e) => setInput(e.target.value)}
        />
        {edit ? (
          <button className="bg-blue-500 px-2 text-white rounded-md">
          ✔
          </button>
        ) : null}
        {edit ? (
          <button onClick={()=>{dispatch(setEdit()); setInput('')}} className="bg-red-500 px-2 text-white rounded-md">
            ❌
          </button>
        ) : null}
        {!edit ? (
          <button className="bg-green-500 px-2 text-white rounded-md">
            📥
          </button>
        ) : null}
      </form>
      <input
        className="hidden "
        type="checkbox"
        id="themeBtn"
        onChange={(e) => {
          dispatch(setTheme());
        }}
      />
      <label
        htmlFor="themeBtn"
        className={
          !theme
            ? "text-white  px-2 rounded-md bg-slate-500  cursor-pointer select-none"
            : "text-black px-2 rounded-md bg-slate-500 cursor-pointer select-none"
        }
      >
        Theme : {!theme ? "🌚" : "🌞"}
      </label>
    </div>
  );
}

export default AddTodo;
