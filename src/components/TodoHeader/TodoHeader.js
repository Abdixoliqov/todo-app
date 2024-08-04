import './TodoHeader.css'
import logo from '../../assests/images/Combined Shape.png'
function TodoHeader() {
    return ( 
        <div className="todo-header d-flex-between">
            <h3 className="todo-header-title">todo</h3>
            <div className="todo-header-icon">
                <img src={logo} alt="" />
            </div>
        </div>
     );
}

export default TodoHeader;