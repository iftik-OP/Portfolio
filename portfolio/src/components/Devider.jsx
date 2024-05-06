import "./Devider.css";


function Devider(props){
    return (
        <div className="Devider">
            <h4>{props.text}  <span style={{color: "rgb(190, 39, 39)"}}>{props.text} </span>{props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text} {props.text}</h4>
        </div>
    );
}


export default Devider;