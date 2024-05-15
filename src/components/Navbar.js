import React, { useEffect } from "react";
import logo from "../assets/croplogo1.png";
// import "../App.css"
import { Link, matchPath } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { TiShoppingCart } from 'react-icons/ti'
// import ProfileDropDown from '../core/Auth/ProfileDropDown'
// import { categories } from '../../services/apis'
// import { apiConnector } from '../../services/apiConnector'
import { useDispatch } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRef } from 'react'
// import { HiSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router'
import { NavbarLinks } from "./Data/navbar-links";
import { useState } from "react";


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation()
  const matchRoutes = (routes) => {
      return matchPath({ path: routes }, location.pathname)
  }


  const [sublinks, setsublinks] = useState([]);
  const navigate =useNavigate();
  // const fetchSublinks = async () => {
  //     try {
  //         const result = await apiConnector("GET", categories.CATEGORIES_API);
  //         if (result?.data?.data?.length > 0) {
  //             setsublinks(result?.data?.data);
  //         }
  //         localStorage.setItem("sublinks", JSON.stringify(result.data.data));

  //     } catch (error) {
  //         // setsublinks(JSON.parse(localStorage.getItem("sublinks")));
  //         // console.log("could not fetch sublinks",localStorage.getItem("sublinks"));
  //         console.log(error);
  //     }
  // }
  // useEffect(() => {
  //     fetchSublinks();
  // }, [])

  const show = useRef();
  const overlay = useRef();

  const shownav = () => {
      show.current.classList.toggle('navshow');
      overlay.current.classList.toggle('hidden');
  }



  //handeling navbar scroll
  // const handleScroll = () => {
  //     const currentScrollPos = window.scrollY

  //     if (currentScrollPos > prevScrollPos) {
  //         setVisible(false)
  //     } else {
  //         setVisible(true)
  //     }

  //     setPrevScrollPos(currentScrollPos)
  // }

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll);

  //     return () => window.removeEventListener('scroll', handleScroll)
  // })

  // const handelSearch = (e) => {
  //     e.preventDefault();
  //     if (searchValue?.length > 0) {
  //         navigate(`/search/${searchValue}`);
  //         setSearchValue("");
  //     }
  // }




    

  return (
    <div className={` flex sm:relative bg-[#3c3131] w-screen relative z-50  items-center justify-center border-b-[5px] border-b-richblack-700 translate-y-  transition-all duration-500 `}>
    <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
      <div className="flex items-center justify-center  ">
      <Link to='/' >
            <img src={logo} alt="Mp interiors"  className=" h-[70px] w-[300px] "></img>
    </Link>
      </div>
    
      



        {/* mobile Navbar */}
        
              
                      

                <div className={`flex md:hidden  relative  flex-row   `}>
                    <GiHamburgerMenu className={`w-16 h-8 fill-richblack-25 absolute -left-10 -bottom-4  `} onClick={shownav} />
                    <div ref={overlay} className=' fixed top-0 bottom-0 left-0 right-0 z-30 bg w-[100vw] hidden h-[100vh] overflow-y-hidden    bg-[rgba(0,0,0,0.5)] ' onClick={shownav}></div>
                    <div ref={show} className='mobNav z-50 '>
                        <nav className=' flex flex-col absolute w-[200px] -left-[185px] -top-[20px]   glass2  py-7' ref={show}>
                            {/* {
                                token == null && (
                                    <Link to='/login' className='' onClick={() => { dispatch(setProgress(100)) }} >
                                        <button onClick={shownav} className=' mt-4 text-center text-[15px] px-6 py-2 rounded-md font-semibold bg-yellow-50 text-black hover:scale-95 transition-all duration-200'>
                                            Login
                                        </button>
                                    </Link>
                                )
                            }
                            {
                                token == null && (
                                    <Link to='/signup' className='text-yellow-50' onClick={() => { dispatch(setProgress(100)) }} >
                                        <button onClick={shownav} className='mt-4 text-center text-[15px] px-5 py-2 rounded-md font-semibold bg-yellow-50 text-black hover:scale-95 transition-all duration-200' >
                                            Signup
                                        </button>
                                    </Link> */}
{/* 
                                )
                            } */}

                            
                            <div className=' mt-4 mb-4 bg-richblack-25 w-[200px] h-[2px]'></div>
                            <a href="whatsapp://send?text= 
                                    I have visited your website, mpinterior.in. Please contact me at your earliest convenience. Thank you.&phone=+918961340538" target="blank" 
                                    className="text-white  text-lg  px-2 py-3 bg-[#ff4c4c] m-2">
                                      CONTACT <sub className="text-yellow-25 -top-3 -left-0">new</sub>
                                    </a>
                            {/* <p className=' text-[20px] text-blue-400 font-semibold'></p> */}
                            {/* <div className=' flex flex-col items-end pr-4 text-white '>
                                {
                                    NavbarLinks?.length < 0 ? (<div></div>) : (
                                      NavbarLinks?.map((element, index) => (
                                            <Link to={`/${element?.title}`} key={index} onClick={() => { shownav() }} className="p-2 text-sm">
                                                <p className=' text-richblack-5 '>
                                                    {element?.title}
                                                </p>
                                            </Link>
                                        )))
                                }
                            </div> */}
                            <div className=' mt-4 mb-4 bg-richblack-25 w-[200px] h-[2px]  flex flex-col items-start '></div>

                            <Link to='/' onClick={() => {  shownav() }} className="p-2">
                                <p className=' text-richblack-5 text-[20px]  '>
                                    Home
                                </p>
                            </Link>
                            <Link to='/project' onClick={() => {  shownav() }} className="p-2">
                                <p className=' text-richblack-5 text-[20px]'>
                                    Recent Projects
                                </p>
                            </Link>
                            <Link to='/services' onClick={() => {  shownav() }} className="p-2">
                                <p className=' text-richblack-5 text-[20px]'>
                                    Our Services
                                </p>
                            </Link>
                            <Link to='/portfolio' onClick={() => {  shownav() }} className="p-2">
                                <p className=' text-richblack-5 text-[20px] '>
                                    PortFolio
                                </p>
                            </Link>
                            <Link to='/about' onClick={() => {  shownav() }} className="p-2">
                                <p className=' text-richblack-5 text-[20px]'>
                                    About
                                </p>
                            </Link>
                            <Link to='/contact' onClick={() => {shownav() }} className="p-2">
                                <p className=' text-richblack-5 text-[20px]'>
                                    Contact Us 
                                </p>
                            </Link>
                        </nav>
                    </div>
                </div>

      {/* Navbar anchor tag section */}

      <div className=" w-[30%]  lg:w-[60%] hidden lg:block lg:pl-[80px] lg:py-4">
        <ul className="flex  text-[#FFF5EE] font-semibold lg:gap-x-6  font-mono  ">
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-900">
            <Link to="/ "> HOME</Link>
          </li>
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-900">
            <Link to="/project "> RECENT PROJECTS</Link>
          </li>

          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-900">
            <Link to="/services ">OUR SERVICES</Link>
          </li>

          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-900">
            <Link to="/about ">ABOUT</Link>
          </li>

          
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-900">
            <Link to="/contact "> CONTACT US</Link>
           
          </li>
          <li className=" hover:text-blue-400  hover:border-b-2 border-blue-900">
            <Link to="/portfolio ">PORTFOLIO  <sub className="text-yellow-100 -top-3 right-1  "> New </sub></Link>
          </li>
        </ul>
      </div>

      {/* Login signup logout dashboard button  */}

      {/* <div className="">
        {!isLoggedIn && (
          <Link to="/login">
            <button className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px] mx-4 transition duration-200 ease-in  bg-richblack-800 hover:text-green-500 ">
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px]  transition duration-200 ease-in bg-richblack-800 hover:text-yellow-300">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={loginHandler}
              className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px] mx-4 transition duration-200 ease-in  bg-richblack-800 hover:text-green-500 "
            >
              Log out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className=" text-richblack-100 rounded-[8px] border border-richblack-700  px-3 py-[8px]  transition duration-200 ease-in bg-richblack-800 hover:text-green-500">
              Dashboard
            </button>
          </Link>
        )} */}
      {/* </div> */}



       <div className="hidden lg:block">
        
      <a href="whatsapp://send?text= 
                                    I have visited your website, mpinterior.in. Please contact me at your earliest convenience. Thank you.&phone=+918961340538" target="blank" >
      <button className="bg-pink-600  h-[34px] text-[white] w-fit  px-2 text-[14px] flex items-center  hover:bg-yellow-25 hover:text-richblack-900 hover:font-400 transition-all duration-300 ease-in" >
        BOOK A CONSULTATION
      </button>
        </a>

        </div>  </div>
    </div>
  );
};

export default Navbar;
