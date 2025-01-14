import { ITtodoItem } from "../types"

interface IState{
    todos: ITtodoItem[];
    userName: string;
}

interface IAction{
    type: string;
    payload: any
}
const reducer = (state: IState,action: IAction) :IState =>{

    switch (action.type){
        case 'INIT_TODOS':{
            if(state.todos.length ===0 ){
                return{...state,todos: action.payload}
            }
            return state;
        }
        case 'ADD_TODO':{
            const newTodo=action.payload;
            newTodo.id=Date.now();
            return {...state ,todos: [...state.todos, newTodo]}
        }

    
        case 'REMOVE_TODO':{
            return {...state, todos: state.todos.filter(item => item.id !== action.payload)}
        }
          
        
        case 'TOGLLE_TODO':
        {
            return { ...state, todos: state.todos.map(item => (item.id === Number(action.payload) ) ? {...item, isDone : !item.isDone}: item)}
        }
        default:{
           return state 
        }

    }
    
}

export default reducer;