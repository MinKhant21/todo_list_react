// import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllTodo from './components/CheckAllTodo';
import FilterTodoBtn from './components/FilterTodoBtn';

function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm />
        <TodoList/>
        <CheckAllTodo/>
        <FilterTodoBtn/>
      </div>
    </div>
  );
}

export default App;