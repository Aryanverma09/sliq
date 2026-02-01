import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="bg-primary-dark rounded-[2rem] overflow-hidden min-h-[600px] flex flex-col lg:flex-row relative">
        
        {/* Left Content */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
            Organic Beauty <br/> Collection
          </h1>
          
          <div className="flex gap-4 mb-8">
             <button className="flex items-center gap-2 bg-white text-primary-dark px-6 py-3 rounded-full font-medium hover:bg-secondary transition-all transform hover:scale-105 active:scale-95">
                Open Store <ArrowRight size={18} />
             </button>
             <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-white border-b-4 border-b-transparent ml-1"></div>
             </button>
          </div>

          <p className="text-white/70 max-w-md text-sm leading-relaxed mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            {['Aveda', 'Maybelline New York', "L'Oreal Paris", 'CoverGirl'].map(brand => (
              <span key={brand} className="px-4 py-1.5 rounded-full border border-white/20 text-xs text-white/80 hover:bg-white/10 cursor-default transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative h-[400px] lg:h-auto bg-[#7a2530]">
           {/* Abstract shapes or image placeholder */}
           <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/20 to-transparent z-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2787&auto=format&fit=crop" 
             alt="Luxury Beauty Product" 
             className="w-full h-full object-cover"
           />
           
           {/* Floating Product Card */}
           <div className="absolute bottom-12 left-12 right-12 md:left-auto md:right-12 md:max-w-xs bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 text-white z-20 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-medium">Prada Black Cream</h3>
                  <p className="text-xs text-white/60">Category: <span className="text-white">For Face</span></p>
                </div>
                <div className="text-right">
                   <p className="text-xl font-medium">$270</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
