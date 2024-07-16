import React, { useState } from 'react'; // Import React and useState hook
import { FaPhoneAlt, FaComments, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import contactImage from '../imges/02.jpg'; // Import contact image

const ContactComponent = () => {
  // State to store user's name input
  const [name, setName] = useState('');
  // State to store user's phone number input
  const [number, setNumber] = useState('');
  // State to store user's message input
  const [message, setMessage] = useState('');

  // Function to handle sending a message via WhatsApp
  const handleSend = () => {
    const whatsappMessage = `Name: ${name}\nNumber: ${number}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/252615639898?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp URL in a new tab
  };

  // Function to handle chat with sales team via WhatsApp
  const handleChatWithSales = () => {
    const whatsappUrl = `https://wa.me/252615639898`;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp URL in a new tab
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="relative mb-12 max-w-4xl mx-auto">
        <img src={contactImage} alt="Contact Us" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white text-lg">
              We'd love to hear from you! Whether you have a question about our menu, reservations, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
            <FaPhoneAlt className="text-orange-500 text-6xl mb-4 mx-auto" /> {/* Phone icon */}
            <h3 className="text-2xl font-bold mb-2">Call us directly at</h3>
            <p className="text-3xl text-blue-500 mb-2">+252-625639898</p>
            <a href="tel:615639898" className="text-orange-500 underline">See all numbers and locations</a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
            <FaComments className="text-orange-500 text-6xl mb-4 mx-auto" /> {/* Comments icon */}
            <h3 className="text-2xl font-bold mb-2">Chat with our sales team</h3>
            <button 
              onClick={handleChatWithSales}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-600"
            >
              Chat with Sales
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-md mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
          <p className="text-gray-600 mb-6 text-center">
            To get in touch with us, please fill out the form below and click "Send".
          </p>
          <form className="space-y-6">
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <FaUser className="text-gray-400 mr-3" /> {/* User icon */}
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state on input change
                className="w-full border-none focus:ring-0"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <FaPhone className="text-gray-400 mr-3" /> {/* Phone icon */}
              <input
                type="text"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)} // Update number state on input change
                className="w-full border-none focus:ring-0"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <FaEnvelope className="text-gray-400 mr-3" /> {/* Envelope icon */}
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update message state on input change
                className="w-full border-none focus:ring-0"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleSend} // Call handleSend on button click
                className="bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent; // Export ContactComponent
