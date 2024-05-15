import React from 'react'
import "../components/Style/About.css"
import Comp1 from '../components/comp1'
import HighlightText from '../components/core/HighlightText'
import Quote from '../components/core/Quote'
import  Img1 from "../assets/img1.jpg"
import  Img2 from "../assets/img2.jpg"
import  Img3 from "../assets/img3.jpg"
import BD from "../assets/bd1.jpg"
import BD2 from "../assets/bd2.jpg"
import BD1 from "../assets/bd1.jpg"
import BD3 from "../assets/bd3.jpg"
import BD4 from "../assets/bd4.jpg"
import BD5 from "../assets/bd5.jpg"
import Tran from "../assets/bd3.jpg"
import Tran1 from "../assets/tran3.jpg"
import Tran2 from "../assets/tran2.jpg"
import FD from "../assets/2.jpg"


const About = () => {
  return (
    <div className='w-full  justify-center '>
      <div className='background-about w-full'>
        
      </div>
     
            

    <div className='mx-auto text-black bg-richblack-25'>
      {/* section 1 */}
      <section className='bg-richblack-700'>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-black'>
            <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%] text-white'>
                    Your Home, 
                <HighlightText text={"Your Happiness"}/>
                <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'>At  <HighlightText text={"MP Design And Decoration"}/>, we believe that your home should reflect your joy. Designing your space can be a transformative journey. If you're not delighted with your design, let us know. We're dedicated to ensuring your home brings you endless happiness..</p>
            </header>
            <div className='sm:h-[70px] lg:h-[120px]'></div>
            <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[60%] grid-cols-3 gap-3 lg:gap-5'>
                 <img src={Tran} /> 
                <img src={BD5} />
                <img src={Tran1} /> 
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section className='border-b border-richblack-700 pt-[220px] bg-richblack-900'>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
          <div className='h-[100px] '></div>
            <Quote/>

        </div>
      </section>


      {/* section 3 */}

      <section>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
            {/* foudning story wala div */}
            <div className='flex flex-col items-center gap-10 lg:flex-row justify-between '>
                {/* founding story left box */}
                <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Founding Story</h1>

                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Our design philosophy is born from a shared passion for transforming spaces into captivating reflections of individuality and creativity. We believe that interior design should transcend the ordinary, offering a harmonious blend of aesthetics and functionality that speaks to the essence of every client. Let us create a space that not only reflects your style but also inspires your daily life..</p>

                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Our funding story is a testament to the power of shared vision and unwavering determination. What began as a dream among a group of passionate educators, technologists, and lifelong learners quickly gained momentum with the support of forward-thinking investors who believed in our mission.

Securing our initial funding was a pivotal moment, propelling us from ideation to execution. It provided the resources needed to develop and launch our innovative e-learning platform, breaking down barriers to education and empowering learners globally.</p>
                </div>
                {/* foudning story right box */}
                <div>
                    <img className='shadow-[0_0_20px_0] shadow-[#FC6767] mt-6 lg:w-[600px] lg:h-[800px] w-[480px] h-[600px]'  src={FD} />
                </div>
            </div>

            {/* vision and mission wala parent div */}
            <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between'>
                {/* left box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Vision</h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>My vision is to redefine interior design by crafting spaces that transcend mere functionality. I aspire to create environments that evoke emotion, inspire creativity, and reflect the unique essence of each individual. Together, let's transform your space into a living work of art that enhances your lifestyle and ignites your imagination..</p>
                </div>

                {/* right box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>
                        Our Mission
                    </h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>My mission is to collaborate closely with clients to understand their dreams and aspirations, translating these into beautifully designed spaces that exceed expectations. I am committed to delivering exceptional quality and craftsmanship, ensuring every detail reflects the client's vision. Through personalized service and innovative design solutions, I aim to enrich lives by creating environments that inspire and delight..</p>
                </div>
            </div>
        </div>
        {/* <Comp1/> */}
      </section>  

      {/* section 4 */}
      {/* <StatsComponent/>   */}
      
      {/* section 5 */}
      {/* <section className='mx-auto flex flex-col items-center justify-between gap-5 mb-[140px]'> */}
        {/* <LearningGrid /> */}
        {/* <ContactFormSection /> */}
  

      {/* <section> */}
      {/* <div className=' mb-16 mt-3 w-screen'>
        <h2 className='text-center text-4xl font-semibold mt-8 text-richblack-5 mb-5'>Reviews from other learners</h2>
        
      </div> */}
      {/* </section> */}

    </div>
  

    </div>



    
  )
}

export default About
