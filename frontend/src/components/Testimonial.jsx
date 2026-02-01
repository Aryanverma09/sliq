import React from 'react';

const Testimonial = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#1a1a1a] text-white py-16 px-8 md:px-16 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex-1 space-y-8">
              <span className="text-6xl font-serif text-white/20">"</span>
              <p className="text-xl md:text-3xl font-serif leading-relaxed text-white/90">
                People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in, their true beauty is revealed only if there is a light from within.
              </p>
              <div>
                <p className="text-lg font-medium text-white">Elisabeth Kubler-Ross</p>
              </div>
           </div>
           
           <div className="flex-1 md:max-w-md w-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
           </div>
      </div>
    </section>
  );
};

export default Testimonial;
