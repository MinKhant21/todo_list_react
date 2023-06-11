// import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllTodo from './components/CheckAllTodo';
import FilterTodoBtn from './components/FilterTodoBtn';
import { useEffect, useState } from 'react';
import './BpData';
function App() {
  let [todos , settodos] = useState([])
  let url = window.data.url;
  let remainingCount = todos.length
  // console.log(remainingCount)
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(todos => settodos(todos))
  },[url])
  let storeTitle = (data) =>{
    //client
    settodos(prevState =>[...prevState,data])    
    //server
    fetch(url,{
      method:'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
     },
     body:JSON.stringify(data)
    })
  }
  let deleteTodo = (id) =>{
    fetch(`${url}/${id}`,{
      method:"DELETE"
    })
     settodos(prevState => {
      return todos.filter(todo=>{
        return todo.id !== id
     })
    })
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm storeTitle={storeTitle} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <CheckAllTodo remainingCount={remainingCount}/>
        <FilterTodoBtn/>
      </div>
    </div>
  );
}

export default App;