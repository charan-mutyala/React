import React, { useEffect, useState } from 'react'

function FunctionalTimer() {

// const [Timer,setInterval]=useState(0);
// const logTimer=(e)=>{
//     setInterval(e.Timer);
//         useEffect(()=>{
//         console.log("useeffect Changed")
//         window.addEventListener('time',logTimer)
//     },[])
const [time,setTime]=useState(0);
 const tick=()=>{
    setTime(time+1)
}

    // const [count, setCount] = useState(0);
    useEffect(()=>{
        setInterval(tick,1000)
    })
  
    // useEffect(() => {
    //   (() => {
    //     setCount((count) => count +1);
    //   }, 1000);
    // });
  return (
    <div><h1>{time}</h1></div>
  )
}


export default FunctionalTimer