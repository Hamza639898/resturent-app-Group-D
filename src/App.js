// Importing necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // For routing
import { AnimatePresence, motion } from 'framer-motion'; // For page transitions with animations

// Importing components and pages
import Header from './companant/Header';
import MainSection from './pages/MainSection';
import AboutComponent from './pages/about';
import ContactComponent from './pages/ContactComponent';
import Faq from './pages/faq';
import MenuPage from './companant/MenuPage';
import AuthPage from './pages/AuthPage';
import Cart from './companant/Cart';
import Checkout from './companant/Checkout';
import OrderConfirmationPage from './companant/OrderConfirmationPage';
import { UserProvider } from './companant/contexts/UserContext'; // Context for user data
import { CartProvider } from './companant/contexts/CartContext'; // Context for cart data

// Main App component
function App() {
  return (
    // Providing user and cart context to the entire application
    <UserProvider>
      <CartProvider>
        <Router>
          <Header /> {/* Header component will be displayed on all pages */}
          <PageTransitions> {/* Wrapper for page transitions */}
            <Routes>
              {/* Defining routes and corresponding components */}
              <Route path="/" element={<MainSection />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/contact" element={<ContactComponent />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            </Routes>
          </PageTransitions>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

// Component for handling page transitions with animations
const PageTransitions = ({ children }) => {
  const location = useLocation(); // Get the current location

  return (
    <AnimatePresence mode="wait">
      {/* motion.div for animated transitions */}
      <motion.div
        key={location.pathname} // Unique key for each route based on the path name
        initial={{ opacity: 0, x: 100 }} // Initial animation state: element is transparent and shifted right
        animate={{ opacity: 1, x: 0 }} // Animate to: element is fully visible and in the correct position
        exit={{ opacity: 0, x: -100 }} // Exit animation state: element is transparent and shifted left
        transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
      >
        {children} {/* Render the child components (the pages) */}
      </motion.div>
    </AnimatePresence>
  );
}

export default App; // Exporting the App component as default
