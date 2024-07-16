import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import { useUser } from '../companant/contexts/UserContext'; // Import useUser hook from UserContext
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons from react-icons

const AuthPage = () => {
  const { login } = useUser(); // Destructure login function from useUser
  const [email, setEmail] = useState(''); // State for storing email input
  const [password, setPassword] = useState(''); // State for storing password input
  const [name, setName] = useState(''); // State for storing name input
  const [error, setError] = useState(''); // State for storing error messages
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Function to handle login button click
  const handleLogin = () => {
    if (!name) {
      setError('Name is required'); // Set error if name is empty
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email'); // Set error if email is invalid
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters'); // Set error if password is less than 6 characters
      return;
    }

    const userInfo = { email, name }; // Create user info object
    login(userInfo); // Call login function with user info
    navigate('/menu'); // Navigate to menu page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message if exists */}
        <div className="mb-4 flex items-center border border-gray-300 p-2 rounded focus-within:ring-2 focus-within:ring-blue-500">
          <FaUser className="text-gray-500 mr-2" /> {/* User icon */}
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state on input change
            className="w-full focus:outline-none"
          />
        </div>
        <div className="mb-4 flex items-center border border-gray-300 p-2 rounded focus-within:ring-2 focus-within:ring-blue-500">
          <FaEnvelope className="text-gray-500 mr-2" /> {/* Envelope icon */}
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            className="w-full focus:outline-none"
          />
        </div>
        <div className="mb-6 flex items-center border border-gray-300 p-2 rounded focus-within:ring-2 focus-within:ring-blue-500">
          <FaLock className="text-gray-500 mr-2" /> {/* Lock icon */}
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            className="w-full focus:outline-none"
          />
        </div>
        <button 
          onClick={handleLogin} 
          className="bg-blue-600 text-white w-full py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AuthPage; // Export AuthPage component
