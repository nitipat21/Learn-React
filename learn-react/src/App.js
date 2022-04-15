import React from 'react';
import Dice from './components/dice';
import Confetti from 'react-confetti'

export default function App(){

    const [newDice,setNewDice] = React.useState(allNewDice);

    const [isWon,setIsWon] = React.useState(false);

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
    };

    function clickDice(id){
        setNewDice(prevDice => {
            return prevDice.map(dice => dice.id === id ? {...dice, isHold:!dice.isHold} : dice );
        })
    };

    function newGame(){
        setNewDice(allNewDice);
        setIsWon(false);
    }

    React.useEffect(()=> {
        console.log("changed state");

        const allIsHold = newDice.every(dice=> dice.isHold === true)
        const allIsSameValue = newDice.every(dice=> dice.value === newDice[0].value)

        if ( allIsHold && allIsSameValue ) {
            setIsWon(true)
        } 

    },[newDice])

    return (
        <main>
            {isWon && <Confetti />}
            <div className="game-container">
                <div className="game-title">
                    <h1>Tenzies</h1>
                </div>
                <div className="game-info">
                    <p>Roll until dice are the same.<br></br>Click each dice to freeze it at its current value between rolls</p>
                </div>
                <div className="dices-grid-container">
                    {diceElement}
                </div>
                <div className="roll-btn">
                    <button onClick={isWon ? newGame : rollDice}><h1>{isWon ? "New game" : "Roll" }</h1></button>
                </div>
            </div>
        </main>
    )
}