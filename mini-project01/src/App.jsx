import './App.css'
import JobCard from './Components/JobCard'
import {jobOpenings} from './Components/data.js'
function App() {
  return (
    <>
    <div className='flex gap-2 flex-wrap items-center px-2'>
  {jobOpenings.map((item) => (
    <JobCard
      key={item.id}
      brandLogo={item.brandLogo}
      companyName={item.companyName}
      datePosted={item.datePosted}
      post={item.post}
      tag1={item.tag1}
      tag2={item.tag2}
      pay={item.pay}
      location={item.location}
    />
  ))}
</div>

    </>
  )
}

export default App
