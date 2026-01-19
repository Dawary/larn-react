import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='py-10 h-[90vh] w-full px-18 flex gap-10'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content
