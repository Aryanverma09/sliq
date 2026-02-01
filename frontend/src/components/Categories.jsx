import React from 'react';
import { ArrowRight, Play, Smile, Eye, Star } from 'lucide-react';

const Categories = () => {
  const categories = [
    { 
       id: 1, 
       title: 'For Face', 
       desc: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', 
       icon: <Smile className="w-8 h-8 text-primary-dark" />,
       bgColor: 'bg-[#fdfcfc]' 
    },
    { 
       id: 2, 
       title: 'For Eyes', 
       desc: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', 
       icon: <Eye className="w-8 h-8 text-primary-dark" />,
       bgColor: 'bg-[#fbfbfb]' 
    },
    { 
       id: 3, 
       title: 'For Lips', 
       desc: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', 
       icon: <Star className="w-8 h-8 text-primary-dark" />, // Using Star as generic icon, ideally a Lip icon if available
       bgColor: 'bg-[#f9f9f9]' 
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Video Card */}
        <div className="md:col-span-1 min-h-[250px] relative rounded-3xl overflow-hidden group cursor-pointer">
           <img 
             src="https://images.unsplash.com/photo-1556228720-1957be93c6fd?q=80&w=2787&auto=format&fit=crop" 
             alt="Beauty Video" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />
           <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/30 transition-colors flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
               <Play className="w-8 h-8 text-white fill-white ml-1" />
             </div>
           </div>
        </div>

        {/* Category Cards */}
        {categories.map((cat) => (
          <div key={cat.id} className={`${cat.bgColor} rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow border border-secondary/20`}>
             <div>
               <div className="w-14 h-14 rounded-full border border-secondary flex items-center justify-center mb-6 bg-white">
                 {cat.icon}
               </div>
               <h3 className="text-xl font-serif font-bold text-primary-dark mb-2">{cat.title}</h3>
               <p className="text-sm text-text-muted leading-relaxed">{cat.desc}</p>
             </div>
             <div className="mt-8 flex justify-end">
                <button className="w-10 h-10 rounded-full bg-primary-dark text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <ArrowRight size={18} />
                </button>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
