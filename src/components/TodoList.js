import React from "react";

function TodoList({todos,deleteTodo,checkTodo}){
    // console.log(todos)
    return(
        <ul className="todo-list">
            {todos.map(todo=>
                    <li className="todo-item-container" key={todo.id}>
                        <div className="todo-item">
                        <input type="checkbox" checked={`${todo.completed ? 'checked':''}`} onChange={()=>checkTodo(todo.id)}/>
                        <span className={`todo-item-label ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
                        {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
                        </div>
                        <button className="x-button" onClick={()=>deleteTodo(todo.id)}>
                        <svg
                            className="x-button-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        </button>
                  </li>
            )}
         
        </ul>
    )
}

export default TodoList;