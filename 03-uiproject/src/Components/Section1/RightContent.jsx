import React from 'react'
import RightCard from './RightCard'

const RightContent = ({users}) => {
  return (
    <div id='right' className='w-3/4 h-full p-16 flex flex-nowrap gap-10 overflow-x-auto'>
      {users.map((elm, idx)=>(
        <RightCard key={idx} id={idx} img={elm.img} tag ={elm.tag} color={elm.color}/>
      ))}
 
    </div>
  )
}

export default RightContent
