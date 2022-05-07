export default function Dice(props) {

    const createDot = Array.apply(null, Array(props.value)).map((value,index) => <Dot key={index} value={value}/>)

    function Dot() {
        return (
            <span className="dot"> </span>
        )
    }

    return (
        <div    className={props.isHold ? `dice hold face-${props.value}` : `dice face-${props.value}` } 
                id={props.id} 
                onClick={props.clickDice ? ()=>props.clickDice(props.id) : null}>

            {createDot}

        </div>
    )
}