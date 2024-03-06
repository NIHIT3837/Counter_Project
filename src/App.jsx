import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(5);
  const addvalue=()=>{
    if(counter<=100){
    console.log("CLICKED ME ",counter);
    // METHOD 1
    // setCounter(++counter);
    // setCounter(++counter);
    // setCounter(++counter);
    // setCounter(++counter );

    //METHOD 2
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)

    }
  }
  const subvalue=()=>{

    console.log("CLICKED ME ", counter);
    if(counter>0){
    counter=counter-1;
    setCounter(counter);
    }
  }
  return (
    <>
    <h1>CHAI AUR REACT</h1>
    <h1>COUNTER VALUE {counter}</h1>
    <button onClick={addvalue}>ADD VALUE {counter}</button>
    <br></br>
    <br></br>
    <button onClick={subvalue}>SUBTRACT VALUE {counter}</button>
    </>
  )
}

export default App
