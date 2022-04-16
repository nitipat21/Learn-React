import React from 'react';
import Dice from './components/dice';
import Confetti from 'react-confetti'
import Timer from './components/timer';

export default function App(){

    const [newDice,setNewDice] = React.useState(allNewDice);

    const [isWon,setIsWon] = React.useState(false);

    const [isSame,setIsSame] = React.useState(false);

    const [rollCount,setRollcount] = React.useState([0]);

    const [targetNumber,setTargetNumber] = React.useState(randomDice);

    const [isStart,setIsStart] = React.useState(false);

    const [timeArray,setTimeArray] = React.useState(localStorage.length ? JSON.parse(localStorage.getItem("time")) : createTimeArray);

    const [previousTime,setPreviousTime] = React.useState(localStorage.length ? JSON.parse(localStorage.getItem("time"))[JSON.parse(localStorage.getItem("time")).length-1] : "00:00:00" );

    const [bestTime,setBestTime] = React.useState(localStorage.length ? JSON.parse(localStorage.getItem("time")).sort()[0] : "00:00:00" );

    const [newBest,setNewBest] = React.useState(false);

    const diceElement = newDice.map( dice => 
        <Dice
        key = {dice.id}
        id = {dice.id}
        value = {dice.value}
        isHold = {dice.isHold}
        clickDice = {clickDice}
        />
    );

    function randomDice(){
        return Math.ceil(Math.random() * 6);
    };

    function allNewDice(){
        const newArray = [];
        for (let index = 0; index < 10; index++) {
            newArray.push({
                id : index+1,
                value : randomDice(),
                isHold : false
            });
        }
        return newArray;
    };

    function rollDice(){
        setNewDice(prevDice => {
            return prevDice.map(dice => dice.isHold === true ? dice : {...dice,value:randomDice()})
        });

        setRollcount(prevCount => parseInt(prevCount+1));
    };

    function clickDice(id){
        setNewDice(prevDice => {
            return prevDice.map(dice => dice.id === id ? {...dice, isHold:!dice.isHold} : dice );
        })
    };

    function newGame(){
        setNewDice(allNewDice);
        setIsWon(false);
        setRollcount(0);
        setTargetNumber(randomDice);
        setIsStart(true)
    }

    function createTimeArray(){
        const newArray = [];
        return newArray;
    }

    React.useEffect(()=> {
        console.log("changed state");

        const timeNumber = document.querySelector(".timeNumber").textContent;
        const allIsHold = newDice.every(dice=> dice.isHold === true)
        const allIsSameValue = newDice.every(dice=> dice.value === newDice[0].value)
        const allIsSameTargetNumber = newDice.every(dice=> dice.value === targetNumber)

        if ( allIsHold && allIsSameTargetNumber && isStart ) {

            timeArray.push(timeNumber);
            localStorage.setItem("time",JSON.stringify(timeArray));

            const getLocalStorageTimeArray = JSON.parse(localStorage.getItem("time"));
            const getPreviousTime = getLocalStorageTimeArray[getLocalStorageTimeArray.length-1];
            const getBestTime = getLocalStorageTimeArray.sort()[0];

            setPreviousTime(getPreviousTime);
            setBestTime(getBestTime);
            setIsWon(true);
            setIsStart(false);

            if (bestTime === previousTime) {
                setNewBest(true)
                setTimeout(()=> setNewBest(false) ,5000);
            }

        } else if ( allIsHold && allIsSameValue ) {

            setIsSame(true);
            setTimeout(()=> setIsSame(false) ,5000);

        }

    },[newDice])

    return (
        <main>
            {isWon && <Confetti />}
            <div className="game-container">
                <div className="game-title">
                    <h1>TENZIES</h1>
                </div>
                <div className="game-info">
                    <p>Roll until dice are the same.<br></br>Click each dice to freeze it at its current value between rolls</p>
                </div>
                <div className="target-container">
                    <h1 className={isSame && !isWon ? "red shaking" : null}>Target is </h1>
                    {<Dice value={targetNumber}/>}
                </div>
                <div className="track-container">
                    <div className="rollCount">
                        <h1>Roll Count: <span>{rollCount}</span> times</h1>
                    </div>
                    <div className="timer-container">
                        <div className="timer-header">Time:</div>
                            <Timer 
                            start={isStart}
                            reset={isWon}
                            />
                    </div>
                </div>
                <div className="dices-grid-container">
                    {diceElement}
                </div>
                <div className="roll-btn">
                    <button onClick={isWon || !isStart ? newGame : rollDice}><h1>{isWon || !isStart ? "New game" : "Roll" }</h1></button>
                </div>
                <div className="timeRecord-container">
                    <div className="previous-time">
                        <h1>Previous Time: {previousTime}</h1>
                    </div>
                    <div className={newBest ? "best-time shaking" : "best-time"}>
                        <h1>Best Time: {bestTime}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}