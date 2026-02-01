import React from 'react';

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif text-primary-dark">Subscribe for exclusive offers</h2>
          <p className="text-text-muted">Join our community and get 10% off your first order.</p>
          
          <form className="flex rounded-full overflow-hidden bg-[#f5f5f5] p-1.5 focus-within:ring-2 ring-primary-dark/20 transition-shadow">
             <input 
               type="email" 
               placeholder="Email..." 
               className="flex-1 bg-transparent border-none outline-none px-6 text-text-main placeholder:text-text-muted/70"
             />
             <button type="button" className="bg-text-main text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-colors">
               Submit
             </button>
          </form>
          
          <p className="text-xs text-text-muted/60">
            By subscribing you agree with our <a href="#" className="underline hover:text-primary-dark">Privacy Policy</a>
          </p>
       </div>
    </section>
  );
};

export default Newsletter;
