import React, { useEffect, useState } from 'react'

function FunctionalMouse() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
     const logMousePointer=(e)=>{
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("useeffect Changed")
        window.addEventListener('mousemove',logMousePointer)
    },[])

  return (
          <div>X:{x}<br/> Y:{y}</div>

  )
}

export default FunctionalMouse