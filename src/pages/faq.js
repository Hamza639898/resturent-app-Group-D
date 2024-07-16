import React, { useState, useEffect } from 'react'; // Import React and hooks
import { FiChevronDown, FiChevronUp, FiCheckCircle } from 'react-icons/fi'; // Import icons

const FAQ = () => {
  // State for storing the list of FAQs
  const [faqs, setFaqs] = useState([
    { question: "What are your opening hours?", answer: "We are open from 10 AM to 10 PM from Monday to Sunday.", open: false },
    { question: "Do you offer vegetarian options?", answer: "Yes, we have a variety of vegetarian options available on our menu.", open: false },
    { question: "How can I make a reservation?", answer: "You can make a reservation by calling us at (123) 456-7890 or using our online reservation system.", open: false },
    { question: "Do you offer delivery services?", answer: "Yes, we offer delivery services through our website and popular delivery apps.", open: false },
  ]);

  // State for storing the search term
  const [searchTerm, setSearchTerm] = useState('');
  // State for storing the filtered list of FAQs
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  // State for storing the user's question
  const [question, setQuestion] = useState('');
  // State to track if the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Effect to filter FAQs based on the search term
  useEffect(() => {
    setFilteredFaqs(
      faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, faqs]);

  // Function to toggle the open/close state of an FAQ
  const toggleFAQ = index => {
    setFilteredFaqs(filteredFaqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  // Function to handle adding a question
  const handleAddQuestion = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuestion('');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="mb-6">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search for a question..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} // Update search term on input change
        />
      </div>
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 border-gray-200 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="text-xl font-semibold text-gray-700">{faq.question}</h3>
              <span className="text-2xl text-gray-700">
                {faq.open ? <FiChevronUp /> : <FiChevronDown />} {/* Show up/down icon based on open state */}
              </span>
            </div>
            {faq.open && (
              <div className="mt-2 text-gray-600">{faq.answer}</div> // Show the answer if the FAQ is open
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
        {!submitted ? (
          <div id="form-section">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Submit a Question</h3>
            <input
              type="text"
              className="border-2 border-gray-300 p-2 w-full mb-4 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your question"
              value={question}
              onChange={e => setQuestion(e.target.value)} // Update question on input change
            />
            <button
              onClick={handleAddQuestion}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Add Question
            </button>
          </div>
        ) : (
          <div id="message-section" className="flex flex-col items-center transition-opacity duration-300">
            <FiCheckCircle className="text-green-500 text-6xl mb-4" /> {/* Check icon */}
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Thank you!</h3>
            <p className="text-gray-600">We will get back to you with an answer soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ; // Export the FAQ component
