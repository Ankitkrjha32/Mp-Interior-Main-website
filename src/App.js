import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import Navbar from "./components/Navbar";
import Contact from "./pages/contact"
import About from "./pages/About";
import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import RecentProject from "./pages/RecentProject";
import ServicesPage from "./pages/ServicesPage";
import Privacy from "./pages/Privacy";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=" mx-auto flex w-screen flex-col justify-between  text-center text-black">

      
    <div className="w-full h-full">

  
      <Navbar  />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
       
        <Route
          path="/about"
          element={<About/>}
        ></Route>
        

        <Route
          path="/contact"
          element={<Contact/>}
        ></Route>
     

      <Route
          path="/portfolio"
          element={<Portfolio/>}
        ></Route>

        <Route
          path="/services"
          element={<ServicesPage/>}
        ></Route>
        <Route
          path="/project"
          element={<RecentProject/>}
        ></Route>
        <Route
          path="/privacy"
          element={<Privacy/>}
        ></Route>

    

</Routes>
    </div>
  );
}

export default App;
