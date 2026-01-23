import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
   const [theme, setTheme] =  useContext(ThemeDataContext);
 
  return (
    <div>
      <button onClick={()=>setTheme(theme =='light'? 'dark': 'light')} className='px-4 py-2 bg-amber-300 rounded'>Toggle Theme</button>
    </div>
  )
}

export default Button
