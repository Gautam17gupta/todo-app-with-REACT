
import { useState } from "react";
export default function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
          addTodo(value);
          setValue('');
        }
      };

      return(
        <div className="bg-white w-[900px] mx-auto mb-7 pt-5 pb-8 ">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add new task" className="w-[750px] " value={value} onChange={(e)=>setValue(e.target.value)}></input>
                <button type="submit" className="bg-blue-500 text-white font-bold px-4 py-1  ml-8">Add</button>
            </form>
        </div>
      )
}