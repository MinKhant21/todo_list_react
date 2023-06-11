import React, { useState } from "react";

function TodoForm({storeTitle}){
    let [title , setTitle] = useState('')

    let data = {
        id : Math.random(),
        title,
        completed:false
    }

    return (
        <form action="#" onSubmit={()=>storeTitle(data)}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            onChange={e=>setTitle(e.target.value)}
            value={title}
          />
        </form>

    )
}

export default TodoForm;