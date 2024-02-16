import React,{useState} from 'react'
import st from "./Hooks.module.css"



const Hooks = () => {
    const [color,setColor]=useState("green");
 
    

  return (
    <div className={st.maindiv}>
        <h1> Color is {color}</h1>
        <button onClick={()=>setColor("Red") } className={st.btn1}>Red Color</button>

        <button onClick={()=>setColor("Gray")} className={st.btn2}>Gray Color</button>
    </div>
  )
}

export default Hooks