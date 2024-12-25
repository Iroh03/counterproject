import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
const addvalue = ()=>{
  if (counter<20) {
    
    counter = counter+1
    setcounter(counter)
    console.log("clicked", counter)
  }
}

const removevalue = ()=>{
  if(counter>0)
    {
      counter = counter-1
      setcounter(counter)
      console.log("clicked", counter)
    }
}

  return (
    <>
      <h1>welcome</h1>
      <p>current value {counter}</p>
      <button onClick = {addvalue}>
        click to add value
      </button>
      <button onClick = {removevalue}>
        click to remove value
      </button>
    </>
  )
}

export default App
