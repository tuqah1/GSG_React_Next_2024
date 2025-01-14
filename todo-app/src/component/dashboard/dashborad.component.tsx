import "./dashboard.css"
import { ITtodoItem } from "../../types";
import { useMemo } from "react";
interface Iprops{
items: ITtodoItem[];
    
}
const Dashboard =(props:Iprops) =>{
   // console.log("Re render dashboard")
   
    const urgentCount=props.items.filter(item => item.isUrgent).length
   //  const completeCount= props.items.filter(item => item.isDone).length
    const completeCount = useMemo(()=>{
      // console.log("calc comlete")
      return props.items.filter(item => item.isDone).length
    },[props.items])
    
    return(
        <div className="dashboard-wrapper">
         <div className="items">
            <b>{props.items.length}</b>
            <br />
            <span>Created Tasks</span>
         </div>
         <div className="items">
            <b>{urgentCount}</b>
            <br />
            <span>Urgent Tasks</span>
         </div>
         <div className="items">
            <b>{completeCount}</b>
            <br />
            <span>Completed Tasks</span>
         </div>
        </div>
    )
}

export default Dashboard