import React from 'react'
import '../components/Style/Home.css'
import img from "../assets/impppppp11.png"
import Comp1 from '../components/comp1'
import Codeblock from '../components/core/Codeblock'
import About from "./About"
import InstructorSection from '../components/InstructorSection'
import Footer from '../components/core/Footer'
import Project from '../components/core/Project'
import ImageSlider from "../components/core/ImageSlider"




const Home = () => {
  return (
    <div className='w-full  h-screen  items-center justify-center '>
      {/* <div className='background w-full lg:min-h-[660px] h-[250px] flex justify-around items-center   bg-yellow-800  '>
      <Codeblock 
      codeblock={`WELCOME T0 MP DESIGN AND DECORATION`}
                codeColor={""}
               />


               
        
      </div> */}
      <div >
        <ImageSlider/>
      </div>

      <div className='w-full items-center flex-col flex justify-center lg:h-[200px] h-[20%] bg-yellow-200 '> 
        <p className='font-bold capitalize flex items-center justify-center lg:text-[30px] text-[21px] font-serif'>STILL CONFUSED ABOUT STARTING YOUR DREAM HOME PROJECT ?</p>
        <p className='font-bold capitalize flex items-center justify-center lg:text-[22px] text-[16px] '>Get Free Quote And Consultation</p>
      
        <div>
        <a href="whatsapp://send?text= 
                                    I have visited your website, mpinterior.in. Please contact me at your earliest convenience. Thank you.&phone=+918961340538" target="blank" >
      <button className="bg-pink-600  h-[34px] text-[white] w-fit  px-2 text-[14px] flex items-center  hover:bg-richblack-900 hover:text-white mt-3 hover:font-400 transition-all duration-300 ease-in font-mono" >
        Talk To Our  Expert
      </button>
        </a>
      </div>
      
      </div>
      <div>
        <Project/>
      </div>




      <div className='w-full  '>
            <div className='w-full h-fit flex flex-col bg-[#2596be]  justify-center items-center ' >
              <p className='lg:text-[40px] text-[18px] font-[560]  font-mono '>Your Dream Home Is Only 4 Steps away</p>
              <p className='font-semibold lg:text-[18px] text-[11px] font-inter'> Can't get simpler than this </p>
            </div>
      </div>

      <div className=' items-center justify-center flex '>
        <img src={img} alt="" srcset="" className="flex justify-center items-center" />
      </div>


      

     

      <About/>

      
    
      {/* <Footer/> */}

      <div className='w-full '>
            <Footer/>
      </div>


      
      
    </div>
  )
}

export default Home
