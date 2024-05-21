// src/ContactModal.js
import React from 'react';
import wp from "../../assets/icons/whatsapp.png"
import fb from "../../assets/icons/facebook.png"
import ins from "../../assets/icons/instagram.png"
import phone from "../../assets/icons/telephone.png"
import linkdein from "../../assets/icons/linkedin.png"

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-full h-full ">
            <div className="fixed inset-0 bg-black bg-opacity-50 w-full" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] z-60 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                   
                </button>
                <h2 className="text-3xl mb-4 font-mono  font-bold capitalize">Contact Us</h2>
                <div className="flex justify-around mt-4 space-x-4 p-2">
                    <a href="https://www.facebook.com/profile.php?id=61559796368363" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Facebook" className="w-16 h-18 rounded-full hover:border-2 border-r-pure-greys-900" />
                    </a>
                    <a href="https://www.instagram.com/mpdesigndecorations/" target="_blank" rel="noopener noreferrer">
                        <img src={ins} alt="Instagram" className="w-16 h-18 rounded-full  hover:border-2 border-r-pure-greys-900" />
                    </a>
                    <a href="https://wa.me/8961340538" target="_blank" rel="noopener noreferrer">
                        <img src={wp} alt="WhatsApp" className="w-16 h-18 rounded-full  hover:border-2 border-r-pure-greys-900" />
                    </a>
                    <a href="https://www.linkedin.com/in/mp-design-and-decorations-204b97309/" target="_blank" rel="noopener noreferrer">
                        <img src={linkdein} alt="LinkedIn" className="w-16 h-18 rounded-full  hover:border-2 border-r-pure-greys-900" />
                    </a>
                    <a href="tel:8961340538" target="_blank" rel="noopener noreferrer">
                        <img src={phone} alt="Dialpad" className="w-16 h-18 rounded-full  hover:border-2 border-r-pure-greys-900" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
