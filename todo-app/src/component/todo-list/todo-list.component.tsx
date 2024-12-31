import { ITtodoItem } from "../../types"
import TodoItem from "../todo-item/todo-item.component"
import "./todo-list.css"

interface Iprops{
    items:ITtodoItem[];
    onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
    onDelete: (index: number)=>void
    
}
const TodoList =(props:Iprops) =>{
    return(
        <div className="list-Wrapper">
        {
            props.items.map((item,index) => (
            <TodoItem 
            key={item.id} 
            data={item} 
            onToggle={props.onToggle}
            onDelete={()=> props.onDelete(index)}
            />))
            
        }
        </div>
    )
}

export default TodoList