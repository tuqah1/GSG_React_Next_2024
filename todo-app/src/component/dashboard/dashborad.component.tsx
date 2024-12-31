import "./dashboard.css"
import { ITtodoItem } from "../../types";
interface Iprops{
items: ITtodoItem[];
    
}
const Dashboard =(props:Iprops) =>{
    const urgentCount=props.items.filter(item => item.isUrgent).length
    const completeCount=props.items.filter(item => item.isDone).length
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