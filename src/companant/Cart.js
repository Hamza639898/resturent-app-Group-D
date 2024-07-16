import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { useCart } from '../companant/contexts/CartContext'; // Import useCart hook from CartContext

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Destructure cartItems and removeFromCart from useCart

  // Calculate total price of items in the cart
  const total = cartItems.reduce((acc, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0); // Calculate total price for each item
    return acc + itemTotal; // Add item total to accumulator
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        // Show a message if the cart is empty
        <p>Your cart is empty. <Link to="/menu" className="text-blue-500">Go back to menu</Link>.</p>
      ) : (
        <div>
          <ul className="mb-6">
            {cartItems.map(item => (
              <li key={item.idMeal} className="border-b py-4 flex justify-between items-center">
                <span>{item.strMeal} (x{item.quantity})</span> {/* Display item name and quantity */}
                <span>${(item.price * item.quantity).toFixed(2)}</span> {/* Display total price for the item */}
                <button onClick={() => removeFromCart(item.idMeal)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button> {/* Button to remove item from cart */}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">Total:</span> {/* Display total label */}
            <span className="text-xl font-bold">${total.toFixed(2)}</span> {/* Display total price */}
          </div>
          <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</Link> {/* Link to proceed to checkout */}
        </div>
      )}
    </div>
  );
}

export default Cart; // Export Cart component
