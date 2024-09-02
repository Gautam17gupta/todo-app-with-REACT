import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
 const [todos,setTodos]=useState([{text:'adfgsdsavc', isCompleted:false}])

 const addTodo=(text)=>{
  const newTodos=[...todos, { text, isCompleted: false }];
  setTodos(newTodos)
 }

 const deleteTodo=(index)=>{
  const newTodos=[...todos]
  newTodos.splice(index,1)
  setTodos(newTodos)
 }

 const markComplete = (index) => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos);
};

const edit=(index,text)=>{
  todos[index].text=text;
  setTodos(todos)
}

  return (
    <div className="w-[950px] mx-auto text-center bg-gray-100 pb-4">
      <h1 className='font-bold mt-9 mb-5' >To DO List</h1>
     <TodoForm className="bg-white" addTodo={addTodo}></TodoForm>
     <TodoList todos={todos} deleteTodo={deleteTodo} markComplete={markComplete} editTodos={edit}></TodoList>
    </div>
  )
}

export default App
