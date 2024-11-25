import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  let mac = {
    "title" : "About Macbook",
    "body" : "Is this mac ?",
    btnTxt : "More Mac"
  }
  
  return (
    <>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
      <Card passedobj={mac}/>
      <Card />
    </div>
    </>
  )
}

export default App
