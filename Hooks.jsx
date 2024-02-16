import React,{useState} from 'react'
import st from "./Hooks.module.css"



const Hooks = () => {
    const [color,setColor]=useState("green")
  return (
    <div className={st.maindiv}>
        <h1>My color is {color}</h1>
        <button onClick={()=>setColor("Red")}>Change Color</button>
    </div>
  )
}

export default Hooks