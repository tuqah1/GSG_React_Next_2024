import "./result.css"
interface Iprops{
    input: string;
    result: number | null
}


function Result(props: Iprops){
    return(
        <div className="dispaly-result">
             <span className="input-exprition">{props.input}</span>
             { props.result !== null&& <span className="result">{props.result}</span>}
        </div>
    )
}

export default Result