import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import { useCart } from '../companant/contexts/CartContext'; // Import useCart hook from CartContext
import { FaCreditCard, FaPaypal, FaMoneyBillAlt, FaCheckCircle } from 'react-icons/fa'; // Import icons from react-icons

const Checkout = () => {
  const { cartItems } = useCart(); // Destructure cartItems from useCart
  const [address, setAddress] = useState(''); // State to store user's address
  const [paymentMethod, setPaymentMethod] = useState('Credit Card'); // State to store selected payment method
  const [cardNumber, setCardNumber] = useState(''); // State to store card number
  const [expiryDate, setExpiryDate] = useState(''); // State to store card expiry date
  const [cvv, setCvv] = useState(''); // State to store card CVV
  const [paypalEmail, setPaypalEmail] = useState(''); // State to store PayPal email
  const [isPaid, setIsPaid] = useState(false); // State to track if payment is successful
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Calculate total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);

  // Function to handle the checkout process
  const handleCheckout = () => {
    if (!address) {
      alert('Please enter your address'); // Show alert if address is empty
      return;
    }

    if (paymentMethod === 'Credit Card') {
      if (!cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all credit card details'); // Show alert if any credit card detail is missing
        return;
      }
      console.log('Processing Credit Card Payment');
    } else if (paymentMethod === 'PayPal') {
      if (!paypalEmail) {
        alert('Please enter your PayPal email'); // Show alert if PayPal email is missing
        return;
      }
      console.log('Processing PayPal Payment');
    } else if (paymentMethod === 'Cash on Delivery') {
      console.log('Processing Cash on Delivery');
    }

    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
    console.log('Total Amount:', total);
    setIsPaid(true); // Set payment status to true
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      {isPaid ? (
        <div className="text-center">
          <FaCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" /> {/* Payment success icon */}
          <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
          <p className="mb-4">Thank you for your purchase. Your order will be processed soon.</p>
          <button
            onClick={() => navigate('/order-confirmation')} // Navigate to order confirmation page
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Address</label>
            <input 
              type="text" 
              value={address}
              onChange={(e) => setAddress(e.target.value)} // Update address state on input change
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Payment Method</label>
            <div className="flex items-center mb-2">
              <input 
                type="radio" 
                value="Credit Card" 
                checked={paymentMethod === 'Credit Card'} // Check if the payment method is "Credit Card"
                onChange={(e) => setPaymentMethod(e.target.value)} // Update payment method state on change
                className="mr-2"
              />
              <FaCreditCard className="text-xl mr-2" /> {/* Credit card icon */}
              <span>Credit Card</span>
            </div>
            {paymentMethod === 'Credit Card' && (
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-gray-700">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)} // Update card number state on input change
                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your card number"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)} // Update expiry date state on input change
                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)} // Update CVV state on input change
                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="CVV"
                  />
                </div>
              </div>
            )}
            <div className="flex items-center mb-2">
              <input 
                type="radio" 
                value="PayPal" 
                checked={paymentMethod === 'PayPal'} // Check if the payment method is "PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)} // Update payment method state on change
                className="mr-2"
              />
              <FaPaypal className="text-xl mr-2" /> {/* PayPal icon */}
              <span>PayPal</span>
            </div>
            {paymentMethod === 'PayPal' && (
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">PayPal Email</label>
                <input
                  type="email"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)} // Update PayPal email state on input change
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your PayPal email"
                />
              </div>
            )}
            <div className="flex items-center mb-2">
              <input 
                type="radio" 
                value="Cash on Delivery" 
                checked={paymentMethod === 'Cash on Delivery'} // Check if the payment method is "Cash on Delivery"
                onChange={(e) => setPaymentMethod(e.target.value)} // Update payment method state on change
                className="mr-2"
              />
              <FaMoneyBillAlt className="text-xl mr-2" /> {/* Cash on Delivery icon */}
              <span>Cash on Delivery</span>
            </div>
          </div>
          <div className="mb-6 text-center">
            <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span> {/* Display total price */}
          </div>
          <button 
            onClick={handleCheckout} // Call handleCheckout on button click
            className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout; // Export Checkout component
