import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Die from "./components/Die";

function App() {
  const randomNumber = ()=>(Math.floor(Math.random() * 6+1))
  

  const setDiceNumber = ()=>{
    const dieArray = []
    for (let i = 0; i < 10; i++) {
      const newDie =  {
        key: i+1,
        id : i+1,
        diceValue: randomNumber(),
        clicked: false
      }
      dieArray.push(newDie)
    }
    return dieArray
  }

  const [dice, setDice] = useState(setDiceNumber())
  const [won, setWon] = useState(false)

  useEffect(()=>{
    const allClicked = dice.every(die => die.clicked)
    const firstvalue =  dice[0].diceValue
    const sameValue = dice.every(die => die.diceValue === firstvalue)
    if(allClicked && sameValue){
      setWon(true)
    }
  }, [dice])



  const dieclick = (id)=>{
    setDice(prevDie => prevDie.map(die => {
        return die.id === id ? {...die, clicked:!die.clicked} : die
    }))
  }

  const rollDice = ()=>{
    if(!won){
      setDice(prevState => prevState.map((die)=>{
        return die.clicked ? die : {...die, diceValue:randomNumber()}
    }))
    }else{
      setWon(prevState => !prevState)
      setDice(prevState => prevState.map(die => (
        {...die, diceValue:randomNumber(), clicked: false}
      )))
    }
  }
  const mappedDice = dice.map((numbers)=>{
    return(
      <Die
        key={numbers.key}
        diceValue = {numbers.diceValue}
        clicked = {numbers.clicked}
        handleclick = {()=> dieclick(numbers.id)}
      />)
  })
 
  return (
    <div className=" w-11/12 bg-slate-100 sm:w-3/5 flex flex-col justify-center items-center gap-4 p-6 rounded-md">
      <Navbar/>

      <div className=" grid grid-cols-5 grid gap-4">
        {mappedDice}
      </div>

      {won && <h1 className=" font-bold">You win!</h1>}
      
      <button onClick={rollDice} className=" w-auto text-white font-semibold text-lg bg-indigo-500 p-2 rounded-md shadow-sm shadow-black active:shadow-inner">{won ? "Reset Game": "Roll"}</button>
    </div>
  );
}

export default App;
