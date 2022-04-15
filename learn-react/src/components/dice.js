export default function Dice(props) {

    const createDot = Array.apply(null, Array(props.value)).map(() => <Dot />)

    function Dot() {
        return (
            <span class="dot"> </span>
        )
    }

    return (
        <div className={props.isHold ? `dice hold face-${props.value}` : `dice face-${props.value}` } id={props.id} onClick={()=>props.clickDice(props.id)}>
            {createDot}
        </div>
    )
}