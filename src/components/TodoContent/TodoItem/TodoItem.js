import { useState } from 'react';
import './TodoItem.css'

function TodoItem({ todo, onCompleted }) {
    const [value, setValue] = useState(false)



    function onChecked(e, todoId) {
        setValue(e.target.checked)
        onCompleted(todoId, !value)
        console.log(!value, 'check value');

    }

    return (

        <div className="todo-item" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '24px' }}>
            <label className={`check-label ${todo.isCompleted ? 'check-label-checked' : ''}`} htmlFor={`check-${todo.id}`}>
                {
                    todo.isCompleted ? <svg width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg> : ''
                }
            </label>

            <input onChange={(e) => onChecked(e, todo.id)} checked={value} id={`check-${todo.id}`} type="checkbox" style={{ display: 'none' }} />
            <h3 style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo-item-title">{todo.text}</h3>
        </div>
    );
}

export default TodoItem;