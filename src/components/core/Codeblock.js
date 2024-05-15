import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Codeblock = ({codeblock, backgroudGradient, codeColor}) => {
  return (
    <div>
      
      <div className=' h-fit  flex w-screen items-center justify-center   '> 
        {/*HW -> BG gradient*/}

        
    

        <div className={`flex   font-bold font-mono ${codeColor}   relative `}>
            <div className={`${backgroudGradient}`}></div>
           <TypeAnimation
            sequence={[codeblock, 4000, ""]}
            repeat={Infinity}
            cursor={true}
            className='lg:text-[38px] text-[20px] crimson bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text'
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"inline",
                    overflowX:"hidden",
                  
                  
                    display:"flex",
                    
                
                    
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

     </div>



    </div>

    
  )
}

export default Codeblock
