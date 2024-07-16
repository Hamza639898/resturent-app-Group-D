// src/pages/OrderConfirmationPage.js
import React, { useState, useEffect } from 'react'; // Importing React and hooks (useState, useEffect) from React library
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import { FaCheckCircle, FaTruck, FaUtensils, FaSmile, FaSadTear, FaExclamationCircle } from 'react-icons/fa'; // Importing icons from react-icons/fa

const OrderConfirmationPage = () => {
  // useState hook to define state variables
  const [status, setStatus] = useState('preparing'); // Initial status of the order
  const [rating, setRating] = useState(0); // State for star rating
  const [showFeedback, setShowFeedback] = useState(false); // To show emoji feedback options after delivery
  const [feedback, setFeedback] = useState(''); // State for feedback type (happy or unhappy)
  const [comment, setComment] = useState(''); // State for the comment if the user is unhappy
  const [submitted, setSubmitted] = useState(false); // State to track if a comment has been submitted

  // useEffect hook to set timers for changing order status
  useEffect(() => {
    const timers = [
      setTimeout(() => setStatus('prepared'), 8000), // After 8 seconds, change status to 'prepared'
      setTimeout(() => setStatus('sent'), 16000), // After 16 seconds, change status to 'sent'
      setTimeout(() => {
        setStatus('delivered'); // After 24 seconds, change status to 'delivered'
        setShowFeedback(true); // Show feedback options after delivery
      }, 24000)
    ];

    // Cleanup function to clear timers when the component is unmounted
    return () => timers.forEach(clearTimeout);
  }, []);

  // Function to get the message based on the current status
  const getStatusMessage = () => {
    switch (status) {
      case 'preparing':
        return '⏳ Your food is being prepared...';
      case 'prepared':
        return '✅ Your food is ready!';
      case 'sent':
        return '🚚 Your food is on the way!';
      case 'delivered':
        return '🍽️ Your food has been delivered!';
      default:
        return '⏳ Your food is being prepared...';
    }
  };

  // Function to get the icon based on the current status
  const getStatusIcon = () => {
    switch (status) {
      case 'preparing':
        return <FaUtensils className="text-yellow-500 text-4xl" />;
      case 'prepared':
        return <FaCheckCircle className="text-green-500 text-4xl" />;
      case 'sent':
        return <FaTruck className="text-blue-500 text-4xl" />;
      case 'delivered':
        return <FaUtensils className="text-purple-500 text-4xl" />;
      default:
        return <FaUtensils className="text-yellow-500 text-4xl" />;
    }
  };

  // Function to get the background color based on the current status
  const getStatusColor = () => {
    switch (status) {
      case 'preparing':
        return 'bg-yellow-500';
      case 'prepared':
        return 'bg-green-500';
      case 'sent':
        return 'bg-blue-500';
      case 'delivered':
        return 'bg-purple-500';
      default:
        return 'bg-yellow-500';
    }
  };

  // Function to handle star rating click
  const handleRating = (rate) => {
    setRating(rate);
  };

  // Function to handle feedback type click (happy or unhappy)
  const handleFeedback = (type) => {
    setFeedback(type);
  };

  // Function to handle comment submission
  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', comment);
    setSubmitted(true);
  };

  // Function to render star rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        onClick={() => handleRating(index + 1)}
        className={`cursor-pointer text-3xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Order Confirmation</h1>
        <div className="flex items-center justify-center mb-6">
          {getStatusIcon()}
        </div>
        <p className={`mb-4 text-center text-2xl font-semibold ${getStatusColor()}`}>{getStatusMessage()}</p>

        <div className="mb-6 w-full">
          <div className="relative pt-1">
            <div className="overflow-hidden h-6 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: status === 'preparing' ? '25%' : status === 'prepared' ? '50%' : status === 'sent' ? '75%' : '100%' }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getStatusColor()}`}
              >
                <div className="absolute left-0 top-0 h-full w-2 animate-ping bg-white"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex justify-between px-4">
              {/* Each step in the progress bar with respective icons */}
              <div className="relative">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${status === 'preparing' ? 'bg-yellow-500' : 'bg-gray-300'}`}>
                  <FaUtensils className="text-white" />
                </div>
                <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-xs">Preparing</span>
              </div>
              <div className="relative">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${status === 'prepared' || status === 'sent' || status === 'delivered' ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <FaCheckCircle className="text-white" />
                </div>
                <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-xs">Prepared</span>
              </div>
              <div className="relative">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${status === 'sent' || status === 'delivered' ? 'bg-blue-500' : 'bg-gray-300'}`}>
                  <FaTruck className="text-white" />
                </div>
                <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-xs">Sent</span>
              </div>
              <div className="relative">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${status === 'delivered' ? 'bg-purple-500' : 'bg-gray-300'}`}>
                  <FaUtensils className="text-white" />
                </div>
                <span className="absolute left-1/2 transform -translate-x-1/2 top-10 text-xs">Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback section */}
        {showFeedback && (
          <div className="mb-4">
            <h2 className="text-2xl mb-2">Rate Your Experience</h2>
            <div className="flex justify-center mb-4">{renderStars()}</div>
            <h2 className="text-2xl mb-2">How was your service?</h2>
            <div className="flex justify-center mb-4">
              <span
                onClick={() => handleFeedback('happy')}
                className="cursor-pointer text-3xl mr-4"
              >
                😊
              </span>
              <span
                onClick={() => handleFeedback('unhappy')}
                className="cursor-pointer text-3xl"
              >
                😞
              </span>
            </div>
            {feedback === 'happy' && (
              <p className="text-green-500">Thank you for your feedback!</p>
            )}
            {feedback === 'unhappy' && !submitted && (
              <form onSubmit={handleSubmitComment} className="mb-4">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                  placeholder="Please let us know why you are unhappy"
                ></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </form>
            )}
            {feedback === 'unhappy' && submitted && (
              <div className="text-center text-red-500">
                <FaExclamationCircle className="text-4xl mx-auto mb-2" />
                <p>We apologize for the inconvenience. We will address the issue promptly and get back to you shortly.</p>
              </div>
            )}
          </div>
        )}

        <p className="mb-4 text-center">Thank you for your order! Your food is being prepared and will be delivered to you shortly.</p>
        <div className="text-center">
          <Link to="/" className="text-blue-500">Back to Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;
