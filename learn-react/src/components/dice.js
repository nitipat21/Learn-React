export default function Dice(props) {

    return (
        <div className={props.isHold ? "dice hold" : "dice" } id={props.id} onClick={()=>props.clickDice(props.id)}>
            <h1>{props.value}</h1>
        </div>
    )
}