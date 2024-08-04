import { useState } from 'react';
import './TodoForm.css'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState(undefined)

    function onSubmit(e) {
        e.preventDefault()
        if(!value) return
        addTodo({id: Math.floor(Math.random()*10000000), text: value, isCompeted: false})
        setValue('')
    }

    function onChange(e) {
        setValue(e.target.value)
        console.log(value);

    }

    return (
        <div className="todo-form">
            <form onSubmit={onSubmit} className='add-form'>
                <input value={value} onChange={onChange} className='todo-form-input' type="text" placeholder='Create a new todo… ' />
                <button type='submit' className='add-btn'>+</button>
            </form>
        </div>
    );
}

export default TodoForm;