import React from "react";
import Todo from "./Todo";

function TodoList({todos,deleteTodo,updateTodo}){
    // console.log(todos)
    return(
        <ul className="todo-list">
            {todos.map(todo=>
                    <Todo todo={todo} deleteTodo={deleteTodo}  key={todo.id} updateTodo={updateTodo} />
            )}
         
        </ul>
    )
}

export default TodoList;