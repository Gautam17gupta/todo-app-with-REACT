
import TodoItem from "./TodoItem"
export default function TodoList({todos,deleteTodo,markComplete,editTodos}){
    return(
        <div className="bg-white w-[900px] mx-auto -mt-7 pb-5">
            {todos.map((todo, index) => (
              <div>  
              <TodoItem
              key={index}
              index={index}
              todo={todo}
              markComplete={markComplete}
              removeTodo={deleteTodo}
              editTodos={editTodos}
              />
              <hr className="w-[850px] mx-auto border-t-2 border-gray-300 my-4"></hr>
              </div>
            ))}
        </div>
    )
}