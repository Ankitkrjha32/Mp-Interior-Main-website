import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram, FiMail } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import logo from "../../assets/croplogo1.png"
import { LiaLinkedin } from 'react-icons/lia';

const Footer = () => {
    return (
        <div className=' bg-[#11261f] w-full lg:pt-20 pt-14 lg:mb-5 lg:pb-1 pb-7  h-fit-content lg:pl-1 pl-10'>
            <div className='bg-[#11261f] lg:max-w-[88%]   text-[#e9f7ff] lg:mx-auto  lg:flex lg:justify-around lg:pt-8 lg:pb-[100px]  ' >
                <div className='lg:flex   lg:gap-[80px]  gap-[40px] '>
                    <div className=' flex flex-col lg:gap-4  '>
                         <div className=' bg-[#11261f]  '>
                            <img src={logo} alt="" srcset="" className='w-[320px]  bg-[#11261f]' />
                         </div>
                        <div className=' flex lg:p-5 p-8  justify-center gap-9 '>
                            <div className='  '>
                               
                                <a href="/"  
                                     > <FaFacebookSquare size={'2em'}/>
                                </a>
                            </div>
                            <div className=' '>
                               
                                <a href="/"  
                                     > <FiInstagram size={'2em'}/>
                                </a>
                            </div>
                            <div className='  '>
                               
                                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZZQrDFVqsRpxggGFHnGwgHRsLcdvCtThSBZKQvsnbxNDSXrXjXSbfBfmZtgsWrcvxhczg"  
                                     target='blank'> <FiMail size={'2em'}/>
                                </a>
                            </div>
                            <div className='  '>
                               
                                <a href="/"  
                                     > <LiaLinkedin size={'2em'}/>
                                </a>
                            </div>
                           
                           
                            
                        </div>
                    </div>
                    
                    <div className='flex flex-col '>

                        <div className='flex  items-start'>
                            <p className='font-bold text-[22px] font-mono  mb-3 poppins '>Our Company</p>
                        </div>

                        <div className='flex flex-col items-start 
        '>
                            <ul className="flex flex-col items-start text-white  montserrat gap-[5px]">
                                <li className=" hover:text-blue-400    ">
                                    <Link to="/ "> Home</Link>
                                </li>
                                <li className=" hover:text-blue-400  ">
                                    <Link to="/project "> Recent Projects</Link>
                                </li>

                                

                                <li className=" hover:text-blue-400  ">
                                    <Link to="/about ">Abouts</Link>
                                </li>


                               
                                <li className=" hover:text-blue-400 ">
                                    <Link to="/portfolio ">Portfolio</Link>
                                </li>
                                <li className=" hover:text-blue-400 ">
                                    <Link to="/privacy  ">Privacy and Policy</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-[80px]  '>
                    <div className='flex flex-col  '>
                        <div className='flex  items-start'>
                            <p className='font-bold text-[22px] font-mono  mb-3 poppins '>Our Services</p>
                        </div>

                        <div className="flex flex-col items-start montserrat gap-[5px] ">

                            <p>Residential Interior Design</p>
                            <p>Corporate Interior design</p>
                            <p>Retail Interior design</p>
                            <p>Hospitality Interior design</p>
                        </div>

                    </div>
                    <div className=' flex flex-col  '>
                        <div className='flex  items-start'>
                            <p className='font-bold text-[22px] font-mono  mb-3 poppins'>Contact Details</p>
                        </div>
                        <div className='flex flex-col items-start montserrat gap-[5px]'>

                            <p>Jhilam Apartment 3rd Road
                            </p><p> East Kodalia , New Barrackpore </p><p>Kolkata 700131</p>
                            <p>+91 8961340538</p>
                            <p>mpinterious@gmail.com</p>
                        </div>


                    </div>
                </div>
            </div>
            {/* <div>hello</div> */}
        </div>
    )
}

export default Footer
