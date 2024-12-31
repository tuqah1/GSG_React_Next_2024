
import './App.css'
import Form from './component/form/form.component'
import Dashboard from './component/dashboard/dashborad.component'
import TodoList from './component/todo-list/todo-list.component'
import { useState } from 'react'
import { ITtodoItem } from './types'

function App() {
const [todos,setTodos] =useState<ITtodoItem[]>([])
const handleNewItem =(item:ITtodoItem)=>{
setTodos([...todos,item])
}

const handleTaskToggle =(e: React.ChangeEvent<HTMLInputElement>) =>{
  const itemId= e.target .dataset["itemId"];
  const newTodos= todos.map(item =>{
    if(item.id === Number(itemId)) {
      return {...item,isDone : !item.isDone}
    }
    return item;
  })
  setTodos(newTodos)

}

const handleDelete =(index:number)=>{
  
setTodos([...todos.slice(0,index), ...todos.slice(index+1,todos.length)]);
}
  return (
    <div className='app-wrapper'>
     <h1>Todo App {new Date().toDateString()}</h1>
     <Form onSubmit={handleNewItem}/>
    <Dashboard items={todos}/>
    <TodoList items={todos} onToggle={handleTaskToggle} onDelete={handleDelete}/>
    </div>
  )
}

export default App
