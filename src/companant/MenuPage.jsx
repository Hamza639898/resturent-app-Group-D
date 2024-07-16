import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../companant/contexts/CartContext';

const MenuPage = () => {
  const { addToCart, cartItems } = useCart(); // Destructure addToCart and cartItems from useCart
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to store selected category
  const [menuItems, setMenuItems] = useState([]); // State to store menu items
  const [categories, setCategories] = useState(['All']); // State to store categories
  const [loading, setLoading] = useState(true); // State to store loading status
  const navigate = useNavigate(); // Initialize navigate function

  // Fetch menu items from API on component mount
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data.meals);
        const uniqueCategories = ['All', ...new Set(data.meals.map(item => item.strCategory))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
        setLoading(false);
      });
  }, []);

  // Filter menu items based on search term and selected category
  const filteredItems = menuItems?.filter(item => 
    (selectedCategory === 'All' || item.strCategory === selectedCategory) &&
    item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    addToCart({ ...item, price: 10 });
  };

  // Function to navigate to the cart page
  const handleCheckout = () => {
    navigate('/cart');
  };

  // Function to calculate total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * (item.price || 0), 0);
  };

  // Show loading indicator while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search for a dish..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="flex justify-center mb-6">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category)} // Update selected category on button click
            className={`mx-2 px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems?.map(item => (
          <div key={item.idMeal} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.strMeal}</h2>
              <p className="text-gray-700 mb-2">Category: {item.strCategory}</p>
              <p className="text-gray-700 mb-2">Area: {item.strArea}</p>
              <p className="text-gray-700 mb-2">Price: $10</p>
              <p className="text-gray-700">Ingredients: {item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3}</p>
              <button onClick={() => handleAddToCart(item)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white border-t p-4 text-center flex justify-between items-center">
          <div>
            {cartItems.map(item => (
              <div key={item.idMeal} className="inline-block mx-2">
                {item.strMeal} ({item.quantity})
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <span className="mr-4">Total: ${getTotalPrice().toFixed(2)}</span>
            <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">Go to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPage; // Export the MenuPage component
