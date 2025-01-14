import { IStudent } from "../types"

interface Istate{
    studentsList: IStudent[];
    totalAbsents: number;
   
}

// interface IAction {
//   type: string;
//   payload: any;
// }
const reducer =(state: Istate,action: any): Istate=>{

    switch (action.type) {
        case 'INIT_TODOS': {
            if (state.studentsList.length === 0) {
                const totalAbsents = action.payload.reduce((prev: number, cur: IStudent) => prev + cur.absents, 0);
              return { ...state, studentsList: action.payload ,totalAbsents }
            }
            return state;
          }
        case 'ADD_STUDENT': {
            const newStudent =action.payload
            newStudent.id =Date.now();
            return {...state ,
                studentsList: [newStudent,...state.studentsList],
                totalAbsents: state.totalAbsents
            }
        }
        case 'REM_STUDENT': {
             if (state.studentsList.length === 0) return state;
      const removedStudent = state.studentsList[0];
      const newList = [...state.studentsList];
      newList.shift();
      return {
        ...state,
        studentsList: newList,
        totalAbsents: state.totalAbsents - removedStudent.absents,
      };
        }
        case 'ABS_CHANGE': {
            // setStudentsList(studentsList.map(std => std.id === id ? { ...std, absents: std.absents + change } : std));
            return{...state,
                studentsList : state.studentsList.map(std => std.id === action.payload.id ? { ...std, absents: std.absents + action.payload.change } : std) , 
                totalAbsents: state.totalAbsents + action.payload.change,  
        }
        }
            
    
        default:
           return state
    }

}

export default reducer;