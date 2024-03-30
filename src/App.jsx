import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos);


  useEffect(()=>{
   
    if(localStorage.getItem('TodoLists')){
      localStorage.setItem('TodoLists',JSON.stringify(todos))
    
      
    }
    else{
      localStorage.setItem('TodoLists',JSON.stringify([]))
    }
  },[todos])

  useEffect(()=>{
     const html =  document.querySelector('html')
      
       
     if(theme){
      html.style.backgroundColor = 'white'
      
     }
     else{
      html.style.backgroundColor = 'rgb(55,65,81)'

     }
   
  },[theme])

  return (
    <div
      className={`flex p-5      w-full h-fit flex-col justify-center items-center gap-5   `}
    >
      <h1 className="bg-red-500 px-2 py-1 text-white rounded-md shadow-sm  shadow-black cursor-default ">
        React Redux Toolkit
      </h1>
     <div className="flex p-5   w-full h-fit flex-col justify-center items-center gap-5">
     <AddTodo />
      <Todos />
 
     </div>
    </div>
  );
}

export default App;
