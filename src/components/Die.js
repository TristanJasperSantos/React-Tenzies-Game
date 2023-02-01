import React from "react";

const Die = (Props)=>{
    const mystyle = {backgroundColor: Props.clicked ? "#59E391": "white"}
    return(
        <button style={mystyle} onClick={Props.handleclick} className=" w-14 h-14 text-3xl font-bold rounded-md shadow-md flex justify-center items-center bg-white">
            {Props.diceValue}

            
        </button>
    )
}

export default Die;