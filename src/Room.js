import React, {useState} from'react';
import './Room.css';

function Room () {
    let[isLit, setLit] = useState(true);
    let[tempLit, setTemp] = useState(22);
    return (
    <div className={`room ${isLit? "lit": "dark"}`}>
        <center><h1> The Room is {isLit? "lit":"dark"} </h1> </center>
        <br/>
        <center> <button onClick={()=> setLit(true)} >Light On</button>
        <button onClick={()=> setLit(false)} >Light Off</button></center>
        <br/>
        <br/>
        <center> <h1>Room Temperature is {tempLit} <sup>o</sup>C </h1></center>
        <br/>
        <center><button onClick={()=> setTemp(++tempLit)} >Increase Temp (+) </button> 
        <button onClick={()=> setTemp(--tempLit)} >Decrease Temp (-)</button></center>
    </div>

     );
}

export default Room;
