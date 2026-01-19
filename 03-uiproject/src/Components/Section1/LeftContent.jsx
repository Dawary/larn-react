import { MoveUpRight } from 'lucide-react'
import React from 'react'

const LeftContent = () => {
  return (
    <div className=' w-1/3 h-full flex flex-col justify-between p-4'>
      <div className='px-6'>
        <h3 className='font-bold leading-[1.1] text-7xl mb-7'>Prospective <br /> <span className='text-gray-400  px-2'>customer </span> <br />Segmentation</h3>
        <p className='text-xl font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium perspiciatis quidem asperiores explicabo, laborum soluta natus nobis blanditiis iste.</p>
      </div>
      <div className='px-6 text-9xl'>
      <MoveUpRight size={50} />
      </div>
    </div>
  )
}

export default LeftContent
