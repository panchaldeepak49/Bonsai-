import React,{useState} from 'react'

const MyAccordion = ({title,children}) => {
    const [show ,setShow] = useState(false);
  return (
    <>
    <div className='hover:text-green-600 cursor-pointer'>
        <h3 
        onMouseEnter={()=>setShow(!show)} onMouseLeave={()=>setShow(!show)} >{title}</h3>
    </div>
    <div >
        { show && <div className='bg-white p-4 w-full shadow-lg absolute left-14 top-24
        '>{children}</div>}       {/*if show is true then display. */}
        </div>
    </>
  )
}

export default MyAccordion