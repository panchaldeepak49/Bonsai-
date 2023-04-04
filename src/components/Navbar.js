import React,{useState} from 'react'
import './navbar.css'
import { questions } from './api'
import MyAccordion from './MyAccordion';


const Navbar = () => {
  const [data,setData] = useState(questions);
  return (
    <>
    <div className='flex justify-between my-5 mx-5'>
        <div className='ml-10 mt-5'>
        <img src='Images\bonsai.svg' height='100' alt='missing'></img>
        </div>
        <div className='flex justify-evenly space-x-3.5 text-gray-500
        text-2xl font-sans mr-10 '>
            {/* <a href='#' className='hover:text-green-600'>Products</a>
            <a href='#' className='hover:text-green-600'>Industries</a>
            <a href='#' className='hover:text-green-600'>Templates</a>
            <a href='#' className='hover:text-green-600'>Pricing</a>
            <a href='#' className='hover:text-green-600'>Reviews</a>     */}
            
            {
              data.map((curElem)=>{
                // return curElem.title;
                const {id,title,children} = curElem;
                return <MyAccordion key={id} {...curElem}/>     //to pass a key is necessary for it.
              })                                                // passing other data as props 
            }
        </div>
        <div className='flex justify-center item-center text-xl space-x-2.5 mr-20 '>
            <div className='py-2 mr-10'>Log in</div>
            <button className='bg-green-500 px-5 py-2 rounded-full text-white'>Start free</button>
        </div> 
    </div>
    <div className='w-80% h-0.5 bg-green-200'></div>
    <div className='flex justify-start space-x-3.5 mt-8 text-gray-500
    text-xl font-sans ml-10'>
        <a href='#' className='hover:text-green-600'>Small Business</a>
        <a href='#' className='hover:text-green-600'>Agencies</a>
        <a href='#' className='hover:text-green-600'>Freelancer</a>
    </div>
    </>
  )
}

export default Navbar