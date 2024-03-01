// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/Signin"
import Home from "./pages/Home"
import About from "./pages/About"
import Signupp from "./pages/Signupp"


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signupp/>}/>
      </Routes>
    </>
  )
}

export default App
