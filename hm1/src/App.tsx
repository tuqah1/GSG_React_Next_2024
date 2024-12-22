
import { useState } from 'react';
import './App.css'
import Buttons from './components/buttons/buttons.component';
import Result from './components/result/result.component';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  
  const buttons=["1","2","3","4","5","6","7","8","9","0","+","-","=","c"];

  const calcResult =(input :string) =>{

   let total = parseInt(input[0]);
   for (let i=1; i<input.length; i+=2) {
    const operator = input[i];
    const nextNumber = parseInt(input[i + 1]);
    if (operator === '+') total += nextNumber;
    else if (operator === '-') total -= nextNumber;
  }
  return total;
  }

  const handleCliclk =(value: string) =>{
    if(value === '='){
      setInput((old) => old +value);
      const res= calcResult(input);
      setResult(res);
    }else if(value === 'c'){
      setInput("");
      setResult(null);
    }
    else {
      setInput((old) => old +value);
    }
  };


  return (
    <div className='calculator'>
        <Result input={input} result={result}/>
        <div className='buttons'>
         {buttons.map(btn =>(
          <Buttons key={btn} value={btn} onClick={handleCliclk}/>
         ))}
        </div>
    </div>
  )
}

export default App
