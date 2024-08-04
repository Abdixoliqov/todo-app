import React, { createContext, useState } from 'react';
import './App.css'
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoForm from './components/TodoForm/TodoForm';
import TodoContent from './components/TodoContent/TodoContent';

const MyContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'New item', isCompleted: false },
    { id: 2, text: 'New item', isCompleted: false },
    { id: 3, text: 'New item', isCompleted: false },
  ])

  function addTodo(todo) {
    const newTodo = [...todos, todo]
    setTodos(newTodo)
  }

  function onCompleted(id, value) {
    const newTodo = [...todos]
    const todo = newTodo.find(item=>item.id === id)
    todo.isCompleted = value
    setTodos(newTodo)
    console.log(newTodo, 'newtodo');
    
  }

  return (
    <MyContext.Provider value={todos}>
      <div className='App'>
        <div className="app-container">
          <TodoHeader />
          <TodoForm addTodo={addTodo} />
          <TodoContent onCompleted={onCompleted} todos={todos} />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;