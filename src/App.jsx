import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import MainSection from "./components/MainSection"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <div id="container">
        <NavBar />
        
        <MainSection />
      </div>
    </>
  )
}

export default App
