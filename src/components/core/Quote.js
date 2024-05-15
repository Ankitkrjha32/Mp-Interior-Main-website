import React from 'react'
// import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=' text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-brown-500  font-inter'>
     We are dedicated to transforming the way you experience design. Our innovative platform 
      <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>"combines artistic</span>
      <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
        {" "}
        expertise
      </span>
      ,cutting-edge technology, and a supportive
      <span  className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
      {" "}
      community to craft a truly exceptional interior design journey."







      </span>
    </div>
  )
}

export default Quote
