import Todo from '../Todo/Todo'
export function TodoList({ todos = [], onUpdateItem, onDeleteItem }) {
    return (
        <div>{
            todos.map((todo) => <Todo todo={todo} onUpdate={onUpdateItem} onDelete={onDeleteItem} key={todo.id} />)
        }</div>
    )
}