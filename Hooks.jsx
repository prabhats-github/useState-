import React,{useState} from 'react'
import st from "./Hooks.module.css"



const Hooks = () => {
    const [color,setColor]=useState("green")
  return (
    <div className={st.maindiv}>
        <h1> Color is {color}</h1>
        <button onClick={()=>setColor("Red")}>Red Color</button>
        
        <button onClick={()=>setColor("Gray")}>Gray Color</button>
    </div>
  )
}

export default Hooks