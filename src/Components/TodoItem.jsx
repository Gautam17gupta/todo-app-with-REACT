import React, { useState } from "react";
export default function TodoItem({
  index,
  todo,
  markComplete,
  removeTodo,
  editTodos,
}) {
  const [editInput, setEditInput] = useState(false);
  const [todotext, setTodoText] = useState(todo.text);
  const saveHandler = () => {
    setEditInput(!editInput);
    editTodos(index, todotext);
  };
  const editHandler = () => {
    setEditInput(!editInput);
    console.log("edit is working");
  };
  return (
    <div className="flex  flex-row justify-between items-center">
        <div className=" w-[20%] flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600 ml-6 "
        onChange={() => markComplete(index)}
      />
      </div>

      <div
        className={`${todo.isCompleted ? "line-through" : ""} text-left  w-[60%] px-5`}
      >
        {editInput ? (
          <input
            type="text"
            value={todotext}
            onChange={(e) => setTodoText(e.target.value)}
            className="w-[700]"
          ></input>
        ) : (
          todo.text
        )}
      </div>

      {editInput ? (
        <div className=" w-[20%]" >
          <button
            className="py-1 bg-white px-2 text-blue-500"
            onClick={saveHandler}
          >
            save
          </button>
        </div>
      ) : (
        <div className="mr-4  w-[20%]">
          <button
            className="py-1 bg-white text-red-600"
            onClick={() => removeTodo(index)}
          >
            Delete
          </button>
          <button
            className="py-1 bg-white px-2 text-blue-500"
            onClick={editHandler}
          >
            Edit
          </button>
        </div>
      )}

      {/* <button onClick={}>Edit</button>
            <button onClick={()=>markComplete(index)}>COMPLETE</button>
            <button onClick={()=>removeTodo(index)}>DELETE</button> */}
    </div>
  );
}
