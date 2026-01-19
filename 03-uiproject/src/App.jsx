
import './App.css'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

function App() {
const users =[
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'royalblue',
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'crimson',
    tag:'UnderServed'
    
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'skyblue',
    tag:'UnderBanked'
  },
  {
    img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    intro:'',
    color:'orange',
    tag:'UnderBanked'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvcmt8ZW58MHx8MHx8fDA%3D',
    intro:'',
    color:'hotpink',
    tag:'UnderBanked'
  },
]

  return (
    <>
     <div>
      <Section1 users={users}/>
      {/* <Section2/> */}
     </div>
    </>
  )
}

export default App
