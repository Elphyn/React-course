import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <Card>
      <img src="/src/assets/Girl.png" alt="" />
      <Button/>
    </Card>
  )
}

function Card(props){
  return (
    <div className='Card'>
      {props.children}
    </div>
  )
}

function Button(props){
  return(
    <a href="https://www.google.com/" className='Button'>Button</a>
  )
}


export default App
