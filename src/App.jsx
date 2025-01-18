import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieCard from './components/MovieCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Favorites from './pages/Favorites'
import { MovieProvider } from './contexts/MovieContext'

function App() {


  return (
    <MovieProvider>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      
    </MovieProvider>
  )
}

export default App
