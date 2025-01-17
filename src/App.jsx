import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieCard from './components/MovieCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const movies = [
    {id : 1 , title : "Terminator" , release_date : "November 2024"},
    {id : 2 , title : "X man" , release_date : "October 2022"},
    {id : 3 , title : "Black panther" , release_date : "Augest 2024"},
    {id : 4 , title : "the message" , release_date : "November 2023"}
  ]

  return (
    <>
      <Navbar/>
      <Home movies={movies}/>
    </>
  )
}

export default App
