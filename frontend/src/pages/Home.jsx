import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import DiscountedProducts from '../components/DiscountedProducts';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <main className="space-y-24 pb-24">
      <Hero />
      <Categories />
      <DiscountedProducts />
      <Testimonial />
      <Contact />
      <Newsletter />
    </main>
  );
};

export default Home;
