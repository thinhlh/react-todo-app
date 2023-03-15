import './App.scss';
import Home from '../pages/Home/Home';
import { useState } from 'react';
import CreateTodo from '../pages/CreateTodo/CreateTodo';
import Profile from '../components/Profile/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([])
  const [currentChoseTodo, setCurrentChoseTodo] = useState(null)


  const onCreateOrUpdateTodo = (newTodo) => {
    let newTodoList = []
    if (newTodo && newTodo.id) {
      // This is update todo
      newTodoList = todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo
        } else {
          return todo
        }
      })
    } else {
      // This is add todo
      newTodoList = [...todos, { content: newTodo.content, id: new Date().getTime() }]
    }
    setTodos(newTodoList)
  }

  const onDelete = (todo) => {
    const index = todos.indexOf(todo)

    if (index >= 0) {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <Home
          onCreateOrUpdateTodo={setCurrentChoseTodo}
          onDelete={onDelete}
          todos={todos}
        />
    },
    {
      path: '/create',
      element:
        <CreateTodo
          onCreateOrUpdateTodo={onCreateOrUpdateTodo}
          todoToUpdate={currentChoseTodo}
        />
    }
  ])

  return (
    <div className="app-container">
      <Profile className="app-profile" />
      <RouterProvider router={router} className='app-content' />
    </div>
  );
}

export default App;
