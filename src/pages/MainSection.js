import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../companant/contexts/UserContext';
import foodImage from '../imges/d4.webp';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const MainSection = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleOrderNow = () => {
    if (user) {
      navigate('/menu');
    } else {
      navigate('/login');
    }
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-white py-20 mt-24 flex-grow">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Good food choices are good investments.
            </h1>
            <p className="text-gray-600 mb-6">
              Eating healthy is a vital part of living well. Choose meals that nourish your body and mind for a better life.
            </p>
            <div className="space-x-4">
              <button onClick={handleOrderNow} className="bg-red-700 text-white px-6 py-3 rounded-lg">
                Order Now
              </button>
              <button onClick={handleLearnMore} className="border border-red-700 text-red-700 px-6 py-3 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img src={foodImage} alt="Food" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="container mx-auto mt-20 text-center">
          <div className="flex justify-around">
            <div className="text-red-700 font-bold text-3xl">150+<br /><span className="text-gray-600 text-sm">MEALS</span></div>
            <div className="text-red-700 font-bold text-3xl">50+<br /><span className="text-gray-600 text-sm">WORKERS</span></div>
            <div className="text-red-700 font-bold text-3xl">75+<br /><span className="text-gray-600 text-sm">TABLES</span></div>
            <div className="text-red-700 font-bold text-3xl">1000+<br /><span className="text-gray-600 text-sm">CUSTOMERS</span></div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white mt-20 py-12">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <div className="text-4xl font-bold">Restaurant</div>
            <p className="text-gray-400 mt-2">Making food a better experience.</p>
          </div>
          <div className="flex space-x-6 mb-6 lg:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
            <a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
            <a href="/faq" className="text-gray-400 hover:text-white transition duration-300">FAQ</a>
            <a href="/menu" className="text-gray-400 hover:text-white transition duration-300">Menu</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
            <a href="/login" className="text-gray-400 hover:text-white transition duration-300">Login</a>
          </div>
        </div>
        <div className="container mx-auto mt-10 text-center text-gray-400">
          <p>&copy; 2024 Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainSection;
