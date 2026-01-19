import React from 'react'
import {Bookmark} from 'lucide-react'
const JobCard = ({brandLogo, 
    companyName, 
    datePosted, 
    post, 
    tag1, 
    tag2, 
    pay,
    location}) => {
  return (
    <div className='h-[320px] w-[250px] m-2 p-4 bg-[#fff] rounded-2xl relative'>
        <div className='top flex items-center justify-between mb-2'>
            <img className='w-[40px] h-[40px]' src={brandLogo} alt={companyName} />
            <button className='flex gap-2 bg-gray-200 p-2 rounded-[4px] text-[13px] '>Save <Bookmark size={20}/></button>
        </div>
        <div className='center mt-4'>
            <h3 className='font-bold'>{companyName} <span className='text-gray-400'>{datePosted}</span></h3>
            <h2 className='font-bold text-xl'>{post}</h2>
            <div className='flex gap-2 mt-2'>
                <h4 className='bg-gray-200 font-bold text-gray-800 text-[12px] px-4 '>{tag1}</h4>
                <h4 className='bg-gray-200 font-bold text-gray-800 text-[12px] px-4 '>{tag2}</h4>
            </div>
        </div>
        <div className='botom mt-24 flex items-center justify-between'>
            <div>
             <h3 className='font-bold'>{pay}</h3>
              <p className='text-[12px] text-gray-300'>{location}</p>
            </div>
            <div>
                <button className='bg-gray-800 rounded-[4px]  text-[12px] px-3 py-2 text-white'>Apply now</button>
            </div>
        </div>
     
      
    </div>
  )
}

export default JobCard
