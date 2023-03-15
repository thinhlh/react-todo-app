import { useNavigate } from 'react-router-dom'
import './Todo.scss'
export default function Todo({ todo, onUpdate, onDelete }) {
    const navigate = useNavigate()
    return (
        <div className="todo-container">
            <p className='todo-content'>
                {todo.content}
            </p>
            <button onClick={() => {
                onUpdate(todo)
                navigate('/create')
            }}>Update</button>
            <button onClick={() => onDelete(todo)}>Delete</button>
        </div>
    )
}