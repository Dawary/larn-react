import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const [theme]  =useContext(ThemeDataContext);
  return (
    <div className='w-full  bg-cyan-300 flex items-center justify-between px-10 py-2 rounded'>
        <div className='text-2xl font-bold'>SinBar</div>
        <div className='flex gap-10 text-sm font-bold tracking-tight'>
            <h1>Home</h1>
            <h1>Contect</h1>
            <h1>Product</h1>
            <h1>{theme}</h1>
        </div>
      
    </div>
  )
}

export default Navbar
