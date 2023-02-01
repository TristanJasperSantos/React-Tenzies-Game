import React from "react";

const Navbar = ()=>{
    return(
        <nav className=" text-center">
            <h1 className=" text-3xl font-sans font-semibold mb-4">Tenzies Game</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </nav>
    )
}

export default Navbar;