import { useState } from "react"
import "./App.css";

function App() {
  let [count, setCount] =useState(5)

  function increment(){
    if(count===20) { 
      alert('Count cannot be set above 20') 
      return}
    setCount((prev)=>prev+1)
 
  }

  function decrement(){
    if(count==0) {
      alert('Count cannot be set below 0')
      return
    }
    setCount((prev)=>prev-1)
  }
  function reset(){
    setCount(5)
    alert('Count reset to 5')
  }

  return (
    <>
    <h1 className="font-sans font-semibold">Count : {count}</h1>
    <button className="mr-2 mt-5"  onClick={increment}>Increment</button>
    <button className="mr-2" onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>

</>
  )
}

export default App
