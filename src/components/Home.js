import React,{useState} from 'react'
import {FcCheckmark} from 'react-icons/fc'

const Home = () => {
  const white = '#fff'
  const color = '#008000'
  const [status,setStatus] = useState(false)
  const [bg,setBg] = useState(white)
  const [cg,setCg] = useState('#34495e')
  

  const bgChange=()=>{ 
    if(bg===white){
      setBg(color);
      setCg(white);
      setStatus(true)
    }
    else{setBg(white);
    setCg(color);
    setStatus(false)}
    }
  
  
    // const fn = status? bgChange :()=>{}
    
  
  
  

  return (
    <>
    <div className='flex justify-center text-6xl font-bold mt-20 text-green-800'>Pick the best plan for</div>
    <div className='flex justify-center text-6xl font-bold mt-10 text-green-800'> your business</div>
    <div className='flex justify-center item-center mt-10  '>
      <div className='flex bg-gray-200 py-2 px-2 rounded-2xl'>
        <button className='flex items-center bg-gray-200 rounded-2xl px-6' style={{backgroundColor : bg}}
        onClick={bgChange}>
        Monthly</button>
        <button className='flex justify-center bg-green-800 px-5 py-4 text-white rounded-2xl'
        style={{backgroundColor : cg}}
        onClick={bgChange}>
            Yearly
            <span className='bg-white text-green-600 rounded-2xl px-3'>2 months for free</span>
        </button>
        </div>
    </div>
    {
      status? <h1>Monthly</h1> : <h1>Yearly</h1>
    }
    {/* <button onClick={()=>setstatus(false)}>Hide</button>
    <button onClick={()=>setstatus(true)}>Show</button> */}
    <div className='flex justify-evenly mt-10'>

      <div className=' w-3/12 h-auto shadow-2xl'>
        <span className='flex justify-center text-4xl font-semibold'>Starter</span>
      <div className='flex justify-center mt-5 font-semibold'>$<span className='text-4xl'>24</span>/month</div>
      <div className='flex justify-center'>
      <button className='bg-lime-600 px-5 py-2 rounded-full text-white mt-5'>Start for free</button></div>
      <div className='flex justify-center mt-3 font-sans'>Ideal for freelancers and contractors</div>
      <div className='flex justify-center font-sans'>just starting out.</div>
      <div className='h-0.5 w-2/3 bg-gray-500 ml-10 mt-5'></div>
      <div className=''>
        <ol className='list-inside mt-10'>
          <li className='flex ml-5 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/> All Templates</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Unlimited Clients & Projects</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Invoicing and Payments</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Proposal & Contracts</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Proposal & Contracts</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Scheduling</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Task and Time Tracking</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Client CRM </li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Forms & Questionnaires</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Expense Tracking</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Upto 5 Project Collaborators</li>
        </ol>
      </div>
      <div className='flex justify-center mt-10'>
      <button className='bg-lime-600 px-5 py-2 rounded-full text-white'>Start for free</button></div>
      </div>


      {/* IInd card */}
      <div className=' w-3/12 h-auto shadow-2xl'>
        <span className='flex justify-center text-4xl font-semibold'>Professional</span>
      <div className='flex justify-center mt-5 font-semibold'>$<span className='text-4xl'>39</span>/month</div>
      <div className='flex justify-center'>
      <button className='bg-lime-600 px-5 py-2 rounded-full text-white mt-5'>Start for free</button></div>
      <div className='flex justify-center mt-3 font-sans'>Ideal for freelancers and contractors</div>
      <div className='flex justify-center font-sans'>just starting out.</div>
      <div className='h-0.5 w-2/3 bg-gray-500 ml-10 mt-5'></div>
      <div className=''>
        <ol className='list-none list-inside mt-10'>
          <li className='flex ml-5 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/> Everything in Starter,plus</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Custom branding</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Workflow Automations</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Client Portal</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Unlimited Scheduling events</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>QuickBooks Integration</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Calendly Integration</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Zapier Integrations</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Forms & Questionnaires</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Expense Tracking</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Upto 15 Project Collaborators</li>
        </ol>
      </div>
      <div className='flex justify-center mt-10'>
      <button className='bg-lime-600 px-5 py-2 rounded-full text-white'>Start for free</button></div>
      </div>

      {/* IIIrd card */}
      <div className=' w-3/12 h-auto shadow-2xl'>
        <span className='flex justify-center text-4xl font-semibold'>Business</span>
      <div className='flex justify-center mt-5 font-semibold'>$<span className='text-4xl'>79</span>/month</div>
      <div className='flex justify-center'>
      <button className='bg-lime-600 px-5 py-2 rounded-full text-white mt-5'>Start for free</button></div>
      <div className='flex justify-center mt-3 font-sans'>Ideal for freelancers and contractors</div>
      <div className='flex justify-center font-sans'>just starting out.</div>
      <div className='h-0.5 w-2/3 bg-gray-500 ml-10 mt-5'></div>
      <div className=''>
        <ol className='list-disc list-inside mt-10'>
          <li className='flex ml-5 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/> All Templates</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Unlimited Clients & Projects</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Invoicing and Payments</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Proposal & Contracts</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Proposal & Contracts</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Scheduling</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Task and Time Tracking</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Client CRM </li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Forms & Questionnaires</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Expense Tracking</li>
          <li className='flex ml-5 mt-3 text-lg font-sans'><FcCheckmark className='mr-5 mt-1'/>Upto 5 Project Collaborators</li>
        </ol>
      </div>
      <div className='flex justify-center mt-10'>
      <button className='bg-lime-600 px-5 py-2 rounded-full text-white'>Start for free</button></div>
      </div>

    </div>

    <div className='flex justify-center text-5xl font-bold mt-20 text-green-800'>Take it to the</div>
    <div className='flex justify-center text-5xl font-bold text-green-800'>next level with add-ons</div>

    
    </>
  )
}

export default Home