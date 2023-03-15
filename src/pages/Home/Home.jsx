import { useNavigate } from 'react-router-dom'
import './Home.scss'
import { TodoList } from './TodoList/TodoList'

function Home({ todos, onCreateOrUpdateTodo, onDelete }) {
    const navigate = useNavigate()
    return (
        <div className='home-container' >
            <TodoList todos={todos} onUpdateItem={(todo) => onCreateOrUpdateTodo(todo)} onDeleteItem={onDelete} />
            <button onClick={() => {

                // Passing null to indicate this is the create signal
                onCreateOrUpdateTodo(null)
                navigate('/create')
            }}>Create New Todo</button>
        </div>
    )
}

export default Home