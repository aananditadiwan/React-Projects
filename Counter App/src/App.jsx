import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15
  const [counter, setCounter] = useState(0)

  function addCounter(){
    // counter += 1
    setCounter(counter+1)
    console.log(counter)
  }
  function minus(){
    if(counter>0)
      setCounter(counter-1)
  }

 return(
  <div>
    <h1>Counter App</h1>
    {counter}
    <br></br>
    <button onClick={addCounter}>+</button>
    <button onClick={minus}>-</button>
  </div>
 );
}

export default App
