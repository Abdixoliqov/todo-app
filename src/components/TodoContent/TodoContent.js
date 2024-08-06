import { useState } from 'react';
import './TodoContent.css'
import TodoItem from './TodoItem/TodoItem';

function TodoContent({ todos, onCompleted }) {
    const [filter, setFilter] = useState([
        {text: 'All', isActive: false},
        {text: 'Active', isActive: false},
        {text: 'Completed', isActive: false},
    ]);

    function handleClick(index) {
        const newFilter = [...filter]
        newFilter.forEach((item, idx)=>{
            if(idx === index) {
                item.isActive = true
            }
            if(idx !== index) {
                item.isActive = false
            }
        })
        
        setFilter(newFilter)
    }
    return (
        <div className="todo-content">
            {
                todos.map((item, index) => {
                    return (
                        <TodoItem onCompleted={onCompleted} key={item.id} todo={item} />
                    )
                })
            }

            <div className="content-footer d-flex-between">
                <span className="footer-left">{todos.length} items left</span>

                <div className="footer-center">
                    {
                        filter.map((item, index)=>{
                            return(
                                <span className={`${item.isActive? 'active' : ''}`} onClick={()=>handleClick(index)}>{item.text}</span>
                            )
                        })
                    }
                    {/* <span>All</span>
                    <span>Active</span>
                    <span>Completed</span> */}
                </div>

                <span className="footer-right">Clrear Completed</span>
            </div>
        </div>
    );
}

export default TodoContent;