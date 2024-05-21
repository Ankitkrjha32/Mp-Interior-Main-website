import React from 'react'
import ContactModal from './ContactModel'

const contactButton = ({setModalIsOpen,modalIsOpen}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
    <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        onClick={() => setModalIsOpen(true)}
    >
        Contact Us
    </button>
    <ContactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
</div>
  )
}

export default contactButton
