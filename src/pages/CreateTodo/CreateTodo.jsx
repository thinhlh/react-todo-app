import { useState } from 'react'
import './CreateTodo.scss'
import { Link, useNavigate } from 'react-router-dom'
function CreateTodo({ onCreateOrUpdateTodo, todoToUpdate }) {

    const isUpdateTodo = todoToUpdate != null
    const [contentValue, setContentValue] = useState(isUpdateTodo ? todoToUpdate.content : "")
    const navigate = useNavigate()

    return (
        <div >
            <form onSubmit={() => {
                onCreateOrUpdateTodo({
                    id: isUpdateTodo ? todoToUpdate.id : null,
                    content: contentValue
                })
                navigate('/')
            }} className='create-todo-form'>
                <input type='text' minLength="1" maxLength="100" name='todo' autoFocus onChange={(e) => setContentValue(e.target.value)} value={contentValue} />
                <input type='submit' value="Submit" />
                <Link to="/">Go To All Todos</Link>
            </form>
        </div >
    )
}

export default CreateTodo