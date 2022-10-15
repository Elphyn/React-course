import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <Card>
      <img src="/src/assets/Girl.png" alt="#" width={300}/>
      <Info/>
      <div className='btn-sect'>
        <Button/>
        <Button/>
      </div>
      <About/>
      <Interests/>
      
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

function Info(){
  return(
    <div className='Info'>
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h4>laurasmith.website</h4>
    </div>
  )
}

function Button(props){
  return(
    <a href="https://www.google.com/" className='Button'>Button</a>
  )
}

function About(){
  return(
    <div className='about-interests'>
      <h1>About</h1>
      <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </div>
  )
}

function Interests(){
  return(
    <div className='about-interests'>
      <h1>Interests</h1>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
}


export default App
