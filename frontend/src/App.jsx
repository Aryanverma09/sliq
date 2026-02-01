import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import Sale from './pages/Sale';
import { ShopContextProvider } from './context/ShopContext';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sale" element={<Sale />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;