import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start mb-8">
         <h2 className="text-4xl font-serif text-primary-dark">Contact Us</h2>
      </div>

      <div className="bg-[#f2e1e3] rounded-[3rem] p-4 md:p-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Visuals */}
        <div className="flex-1 flex gap-4">
           {/* Woman Image */}
           <div className="w-1/3 rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop" 
               alt="Contact Support" 
               className="w-full h-full object-cover"
             />
           </div>
           
           {/* Map Preview */}
           <div className="flex-1 rounded-3xl overflow-hidden h-[300px] md:h-[400px] relative bg-white/50">
             <img 
               src="https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png" 
               alt="Map" 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary-dark ring-4 ring-white/50 animate-pulse"></div>
             </div>
           </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-transparent flex flex-col justify-center p-4">
           <h3 className="text-2xl font-serif text-[#7a484e] mb-6">Ask how we can help you:</h3>
           
           <form className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
               <input 
                 type="text" 
                 placeholder="Name*" 
                 className="w-full px-6 py-4 rounded-full bg-white border-none outline-none text-text-main placeholder:text-text-muted/70 focus:ring-2 focus:ring-primary-dark/20"
               />
               <input 
                 type="email" 
                 placeholder="Email*" 
                 className="w-full px-6 py-4 rounded-full bg-white border-none outline-none text-text-main placeholder:text-text-muted/70 focus:ring-2 focus:ring-primary-dark/20"
               />
             </div>
             
             <textarea 
               placeholder="Message*" 
               rows="4"
               className="w-full px-6 py-4 rounded-3xl bg-white border-none outline-none text-text-main placeholder:text-text-muted/70 resize-none focus:ring-2 focus:ring-primary-dark/20"
             ></textarea>
             
             <button type="button" className="w-full bg-[#5e131d] text-white py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-lg shadow-primary-dark/20">
               Send Message
             </button>
           </form>
           
           <p className="mt-6 text-xs text-[#7a484e] flex items-center gap-2">
             <BadgeCheck size={16} /> typically replies within 5 minutes
           </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
