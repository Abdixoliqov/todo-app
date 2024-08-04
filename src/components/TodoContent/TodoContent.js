import { useState } from 'react';
import './TodoContent.css'
import TodoItem from './TodoItem/TodoItem';

function TodoContent({ todos, onCompleted }) {
    const [filter, setFilter] = useState([
        {text: 'All', isActive: false},
        {text: 'Active', isActive: false},
        {text: 'Completed', isActive: false},
    ]);

    function handleClick(e) {
        
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
                                <span className={`${item.isActive? 'active' : ''}`} onClick={handleClick}>{item.text}</span>
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