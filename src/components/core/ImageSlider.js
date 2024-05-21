import React from 'react'


import { useState, useEffect } from 'react';
import '../Style/ImageSlider.css';
import ContactModal from './ContactModel';




const backgroundImageUrls = [
  'url(https://media.designcafe.com/wp-content/uploads/2020/05/14155922/modern-bedroom-design-blue-white-bed-design-image-online.jpg)',
  'url(https://t3.ftcdn.net/jpg/03/73/51/06/360_F_373510690_cQQLplLNbi0l84A7sftZq8dSvdKOGCcj.jpg)',
  'url(https://5.imimg.com/data5/SELLER/Default/2023/2/YF/GV/NT/8918903/living-room-interior-designing-service-500x500.jpg)',
//   'url(https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2022/03/luxury-living.jpg)',
 'url( https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg)'

];

const slideDuration = 4000; // Duration between slides in milliseconds
const ultimateTime = 50000; // Total time until the slideshow stops in milliseconds

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  


const openModal = () => setModalIsOpen(true);
const closeModal = () => setModalIsOpen(false);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImageUrls.length);
    }, slideDuration);

    const ultimateTimeout = setTimeout(() => {
      clearInterval(slideInterval);
    }, ultimateTime);

    return () => {
      clearInterval(slideInterval);
      clearTimeout(ultimateTimeout);
    };
  }, []);

  const style = {
    backgroundImage: backgroundImageUrls[currentImageIndex],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '75vh',
    width: '100vw',
    transition: 'background-image 1s ease-in-out' // Optional transition effect
    
    
  };

  return (
    <div className="App" style={style}  >
        <div className="overlay">
        <h1>Welcome to MP Design and Decoration</h1>
        <p>Transforming spaces into your dream designs</p>
  


        <button
            className="bg-blue-500 lg:w-[180px] w-[150px] text-white font-bold py-2 px-4 mt-5 rounded hover:bg-blue-700 transition duration-300"
            onClick={openModal}
        >
            Contact Us
        </button>
        
   
        
</div>

<ContactModal isOpen={modalIsOpen} onClose={closeModal} />
        
      
    </div>
  );
}

export default App;





