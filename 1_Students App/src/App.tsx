import { useState, useEffect, useRef, useReducer } from 'react';
import './App.css'
import { IStudent } from './types';

import Student from './components/student/student.component';
import AddForm from './components/add-form/add-form.component';
import useLocalStorage from './hooks/local-storage.hook';
import reducer from './state/student-reducer';

function App() {
  
  // const [studentsList, setStudentsList] = useState<IStudent[]>([]);
  // const [totalAbsents, setTotalAbsents] = useState(0);
  const lastStdRef = useRef<HTMLDivElement>(null);
  
  const [state,dispatch] =useReducer(reducer, {studentsList:[], totalAbsents:0})

  const { storedData } = useLocalStorage(state.studentsList, 'students-list');

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    // const totalAbs = stdList.reduce((prev, cur) => { return prev + cur.absents }, 0);
    // setTotalAbsents(totalAbs);
    // setStudentsList(stdList);
    dispatch({ type: 'INIT_TODOS', payload:stdList});
  }, [storedData]);

  const removeFirst = () => {
    // const newList = [...studentsList];
    // newList.shift();  // removes the first item
    // setStudentsList(newList);
    const firstStudent = state.studentsList[0];
    if (firstStudent) {
      dispatch({ type: 'REM_STUDENT', payload: firstStudent });
    }
  }

  const handleAbsentChange = (id: string, change: number) => {
    // setTotalAbsents(totalAbsents + change);
    dispatch({ type: 'ABS_CHANGE', payload: {id ,change}});
  }

  const handleAddStudent = (newStudent: IStudent) => {
    // setStudentsList([newStudent, ...studentsList]);
    dispatch({ type: 'ADD_STUDENT', payload: newStudent});
  }

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const h1Style = { color: '#69247C', fontSize: '24px' };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className='stats'>
        <button onClick={removeFirst}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>Total Absents {state.totalAbsents}</b>
      </div>
      {
        state.studentsList.map(student => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            absents={student.absents}
            isGraduated={student.isGraduated}
            coursesList={student.coursesList}
            onAbsentChange={handleAbsentChange}
          />
        )
        )
      }
      <div ref={lastStdRef}></div>
    </div>
  )
}

export default App;