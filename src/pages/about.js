import React from 'react';
import { FaConciergeBell, FaUtensils, FaTruck, FaSmile, FaUserTie, FaUsers } from 'react-icons/fa';

// AboutUs component displays details about the restaurant, its services, and the team
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        
        {/* Our Story section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-center mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold">group-D Restaurant</span>, where we bring you the best culinary experiences from around the world.
            Our journey began with a simple passion for food and a desire to share it with others. Over the years,
            we have grown into a beloved dining destination, known for our delicious dishes, exceptional service, and
            welcoming atmosphere.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            From humble beginnings to a renowned restaurant, we are proud of our heritage and excited for the future. 
            Our commitment to quality and customer satisfaction has remained unwavering, making us a preferred choice 
            for food lovers.
          </p>
        </div>

        {/* Our Services section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-4xl font-semibold text-center mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaConciergeBell className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Exceptional Service</h3>
              <p className="text-gray-700">Our team is dedicated to providing you with the best dining experience.</p>
            </div>
            <div className="text-center">
              <FaUtensils className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Delicious Cuisine</h3>
              <p className="text-gray-700">Enjoy a variety of dishes crafted with the freshest ingredients.</p>
            </div>
            <div className="text-center">
              <FaTruck className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-700">Get your favorite meals delivered to your doorstep quickly.</p>
            </div>
          </div>
        </div>

        {/* Our Team section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-center mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaUserTie className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700">Head Chef</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-6xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <FaSmile className="text-6xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Emily Johnson</h3>
              <p className="text-gray-700">Customer Relations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
