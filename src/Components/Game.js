import React, { useEffect, useState } from "react";
import image from "./images1.jpeg";

function Game() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count ${count} times`;
  });

  // ------------------------------------------------------
  const [time, setTime] = useState(10);
  const tick = () =>{
    if(time!==0) {
        setTime(time -1);
        // alert("Time is up!");
        // <p>Enough i can't beat up</p>
    }
    else{
        clearInterval(time)
    }
  } 
  const Restart=()=>{
    setCount(0);setTime(10);
    
  }
    // setTime(10)
  useEffect(() => {
    setInterval(tick,1000);
  });

  return (
    <div>
        <div1>
      <strong>
        <p style={{ fontSize: "Large" }}>
          
          Click the Batman picture as many times as you want in {time} wacky
          seconds!
        </p>
      </strong>
      </div1>

      <img
        onClick={() => setCount(count + 1)}
        src={image}
        style={{ height: "550px", width: "700px" }}
        alt="Thor"
      />
      <br></br>

      <strong>
        <p>Score: {count} </p>
      </strong>
      <p></p>
      <button onClick={Restart} > Restart</button>
      {/*       <button onClick={restartGame}>Restart</button>
 */}
    </div>
  );
}

export default Game;