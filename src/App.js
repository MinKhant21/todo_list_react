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
  let [updatetodos , setupdatetodos] = useState([])
  let url = window.data.url;
  let remainingCount = todos.length
  // console.log(remainingCount)
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(todos => {
      settodos(todos) 
    setupdatetodos(todos)

    })

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
//   let checkTodo = (id) => {
//     // console.log(updatetodos)
//     let updated = updatetodos.filter((t)=>{
//         if(t.id == id){
//           return setupdatetodos()
//         }
//     })
    
//     console.log(updated)
//     // console.log(updatetodos.map((todos)=>todos.id == id))
// // console.log(id)

//     // fetch(`${url}/${id}`,{
//     //   method:"PATCh",
//     //   body:updatetodos
//     // })
    
//   }
  let updateTodo = (todo) => {
    fetch(`${url}/${todo.id}` ,{
      method : "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(todo)
    })
    settodos(prevState => {
      return prevState.map(t => {
        if(t.id === todo.id) {
          return todo
        }
        return t;
      });// [updatedTodo,todo,todo]
    })
  }

  let Checkall = () => {
    todos.forEach(t => {
      t.completed = true;
      updateTodo(t)
    })
    settodos((prevState) => {
      return prevState.map(t => {
        return {...t,completed : true};
      })
    })
  }

  let clearCompleted = () =>{
    settodos(prevState => {
      return prevState.filter(t=>{
        return !t.completed
      })
    })
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm storeTitle={storeTitle} />
        <TodoList  todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        <CheckAllTodo remainingCount={remainingCount} Checkall={Checkall}/>
        <FilterTodoBtn clearCompleted={clearCompleted}/>
      </div>
    </div>
  );
}

export default App;