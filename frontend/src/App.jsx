import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import DiscountedProducts from './components/DiscountedProducts';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="space-y-24 pb-24">
        <Hero />
        <Categories />
        <DiscountedProducts />
        <Testimonial />
        <Contact />
        <Newsletter />
        {/* Sections to be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;