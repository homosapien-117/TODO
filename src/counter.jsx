import React from 'react'
import {useState} from "react";
function Counter() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>inrement</button>
      <h1>hello world: {count}</h1>
    </div>
  )
}

export default Counter


