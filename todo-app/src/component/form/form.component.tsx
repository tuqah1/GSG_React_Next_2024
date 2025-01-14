import "./form.css"
import { ITtodoItem } from "../../types";
import React from "react";

interface Iprops{
    onSubmit:(item:ITtodoItem) => void
}
const Form = React.memo((props:Iprops)=>{

    //  console.log("re render morm")
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const title:string =e.currentTarget["task"].value
      const isUrgent:boolean =e.currentTarget["urgent"].checked;
      if(title.length>3){
        const newTask: ITtodoItem ={
         id:Date.now(),
         title,
         isUrgent,
         isDone:false
      }
      props.onSubmit(newTask)
      }
      
    }  
    return(
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Type Todo here..." className="nameInput"/>
            <div>
             <label htmlFor="urgent">Urgent</label>
             <input type="checkbox" id="urgent" name="urgent"/>   
            </div>
            <input type="submit" value="Add Todo" className="submit"/>
        </form>
    )
})

export default Form