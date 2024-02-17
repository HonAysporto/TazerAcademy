// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/Signin"

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        
      </Routes>
    </>
  )
}

export default App
