
import "./buttons.css"

interface Iprops{
    value: string;
    onClick: (value: string) =>void

}

function Buttons( props: Iprops ) {
    const handleClick = () => {
        props.onClick(props.value);
      };
    return (
        <button onClick={handleClick}>
            {props.value}
        </button>
    )
}

export default Buttons;