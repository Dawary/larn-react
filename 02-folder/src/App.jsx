import React from 'react'
import Card from './Components/Card.jsx'
import {cardData} from './Components/data.js'
const App = () => {
  return (
    <div className='min-h-screen bg-red-300 w-screen p-4 '>
 
    <div className="flex flex-wrap gap-10">
     {cardData.map((data)=>(
       <Card 
       key={data.id}
       img={data.image}
       title={data.title}
       des={data.description}
       />

     ))}
     </div>
    </div>
  )
}

export default App
