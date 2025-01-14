
import './App.css'
import Form from './component/form/form.component'
import Dashboard from './component/dashboard/dashborad.component'
import TodoList from './component/todo-list/todo-list.component'
import { useCallback, useEffect, useState,useRef, useReducer } from 'react'
import { ITtodoItem } from './types'
import useLocalStorage from './hocks/local-storage.hock'
import reducer from './state/reduser'

function App() {
// console.log("re rebder app componenet")
// const [todos,setTodos] =useState<ITtodoItem[]>([])
const [date,setDate] =useState('');
const timeRef=useRef<number>();


const [state,dispatch] =useReducer(reducer, {todos: [] ,userName: 'ahmad'})

const {storedData}=useLocalStorage(state.todos,"todo-list");

useEffect(()=>{
  // setTodos(storedData || []);
  dispatch({type: 'INIT_TODOS', payload: storedData ||[]})
},[storedData]);

useEffect(()=>{

timeRef.current=setInterval(()=>{
  setDate(new Date().toLocaleTimeString())

},1000)
},[])
const stopTime =()=>{
  if(timeRef.current){
    clearInterval(timeRef.current);
  }
}

const handleNewItem =useCallback( (item:ITtodoItem)=>{
// setTodos([...todos,item])
dispatch({type: 'ADD_TODO',payload: item})
},[state.todos]);

const handleTaskToggle =(e: React.ChangeEvent<HTMLInputElement>) =>{
  const itemId= e.target .dataset["itemId"];
  dispatch({type: 'TOGLLE_TODO',payload:itemId})
  // const newTodos= todos.map(item =>{
  //   if(item.id === Number(itemId)) {
  //     return {...item,isDone : !item.isDone}
  //   }
  //   return item;
  // })
  // setTodos(newTodos)

}

const handleDelete =(index:number)=>{
  const itemId=state.todos[index].id
  dispatch({type: 'REMOVE_TODO',payload: itemId})
// setTodos([...todos.slice(0,index), ...todos.slice(index+1,todos.length)]);
}
  return (
    <div className='app-wrapper'>
      <h1>Todo App - {date} <button onClick={stopTime}>Stop</button></h1>
     <Form onSubmit={handleNewItem}/>
    <Dashboard items={state.todos}/>
    <TodoList items={state.todos} onToggle={handleTaskToggle} onDelete={handleDelete}/>
    </div>
  )
}

export default App
