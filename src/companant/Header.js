// components/Header.js
import React, { useState } from 'react'; // Importing React and useState hook
import { useUser } from '../companant/contexts/UserContext'; // Importing useUser from UserContext
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import { FaPizzaSlice, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons

const Header = () => {
  const { user } = useUser(); // Destructuring user from useUser hook
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Function to toggle the menu state
  };

  return (
    <header className="shadow-md py-4 fixed w-full top-0 z-10 bg-white bg-opacity-90 text-black backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Restaurant Name */}
        <div className="flex items-center">
          <FaPizzaSlice className="text-red-600 text-3xl mr-2" /> {/* Pizza slice icon */}
          <div className="text-red-600 text-3xl font-bold">Restaurant</div> {/* Restaurant name */}
        </div>
        
        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />} {/* Toggle between open and close icons */}
        </div>

        {/* Navigation Links */}
        <nav className={`flex flex-col md:flex-row md:space-x-6 items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 py-2 md:py-0">Home</Link>
          <Link to="/about" className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 py-2 md:py-0">About Us</Link>
          <Link to="/faq" className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 py-2 md:py-0">FAQ</Link>
          <Link to="/menu" className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 py-2 md:py-0">Menu</Link>
          <Link to="/contact" className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 py-2 md:py-0">Contact Us</Link>
          <Link to="/login" className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 py-2 md:py-0">Login</Link>
        </nav>
        
        {/* User info and phone number */}
        <div className="flex items-center space-x-4">
          {user && (
            <span className="text-black text-lg font-semibold hidden md:block">
              Hello, {user.name} {/* Displaying the user's name only on medium and larger screens */}
            </span>
          )}
          <a href="tel:615639898" className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
            615639898 {/* Phone number link */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; // Exporting the Header component
