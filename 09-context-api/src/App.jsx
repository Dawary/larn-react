import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Button from './Components/Button'
import { ThemeDataContext } from './context/ThemeContext'

function App() {
 const [theme]= useContext(ThemeDataContext);
 console.log(theme)

  return (
    <>
    <div>
    <Navbar/>
    <br />
    <Button/>
    <div className={`w-full h-screen ${theme==='light'? 'bg-amber-200':'bg-gray-950 text-white '} flex items-center justify-center text-8xl font-bold`}>
      Home page
    </div>
    </div>
  
    </>
  )
}

export default App
