import React from 'react'

const Card = ({img, title, des}) => {
  return (

    <div className='w-[300px] h-[400px] border rounded-xl shadow-xl overflow-hidden bg-white'>
    <img src={img} alt={title} className='w-full h-[250px] object-cover' />
    <div>
    <h2 className='text-long text-black px-2 font-bold mt-2 mb-2'>{title}</h2>
    <p className='text-gray-600 px-2 text-sm'>{des}</p>
    </div>
 
    </div>
   
  )
}

export default Card
