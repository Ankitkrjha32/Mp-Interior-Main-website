import React from 'react'

const comp1 = () => {
  return (
    <div className=' w-full  bg-pink-300 lg:mt-2 flex flex-col items-center justify-center py-5 pb-0'>
      
      <div className='w-11/12 lg:h-[120px] h-fit bg-orange-300 flex flex-col items-center justify-center font-edu-sa px-5  lg:py-4 py-1 invisible lg:visible'>
                <p className='font-bold lg:text-[20px] text-[12px] text-black mb-2' > 
                        OUR SATISFACTION COMMITMENT
                </p>

                <p className='font-bold lg:text-[15px] text-[9px] text-richblue-600 '>
                     Your satisfaction is our priority. We understand that creating your ideal living space can feel  overwhelming. If you're not completely
                </p>
                <p className='font-bold lg:text-[15px] text-[9px] text-black'>
                      satisfied with your design for any reason at all, please reach out to us. We are committed to
                </p>
                <p className='font-bold lg:text-[15px] text-[9px] text-richblue-600'>
                      making things right and ensuring you love your home.
                </p>


          </div>
          <div className=' flex lg:w-[40%] flex-col gap-10  lg:hidden visible font-mono'>
                    <h1 className=' text-blue-100 bg-clip-text text-4xl font-semibold lg:w-[70%] '>
                        OUR SATISFACTION COMMITMENT
                    </h1>
                    <p className='text-base font-bold lg:w-[95%]  lg:text-[15px] text-[9px] text-richblue-600'>  Your satisfaction is our priority. We understand that creating your ideal living space can feel  overwhelming. If you're not completely satisfied with your design for any reason at all, please reach out to us. We are committed to  making things right and ensuring you love your home.</p>
            </div>
    </div>
  )
}

export default comp1
