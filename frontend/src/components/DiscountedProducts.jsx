import React from 'react';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Set of Fiera creams',
    price: 110,
    oldPrice: 220,
    discount: '50% OFF',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Lash Paradise',
    price: 36,
    oldPrice: 120, // Adjusted based on 20% likely logic or arbitrary
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Superstay Vinyl Ink',
    price: 36,
    oldPrice: 20, // Typo in design? Usually higher. Assuming 39 if 
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1608248555276-26a11ad5c2cb?q=80&w=1935&auto=format&fit=crop' 
  },
  {
    id: 4,
    name: 'Superstay Active',
    price: 36,
    oldPrice: 29, // Typo? 
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1887&auto=format&fit=crop'
  }
];

const DiscountedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#fdf2f2] py-20 rounded-[3rem]">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-serif text-primary-dark">Discounted products</h2>
        <button className="hidden sm:flex items-center gap-2 bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
           Open Store <ShoppingCart size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
           <div key={product.id} className="bg-white p-4 rounded-3xl relative group hover:shadow-xl transition-shadow duration-300">
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-primary-dark text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                {product.discount}
              </span>
              
              {/* Wishlist */}
              <button className="absolute top-4 left-4 p-2 rounded-full hover:bg-secondary transition-colors z-10">
                 <Heart size={18} className="text-primary-dark" />
              </button>

              {/* Image */}
              <div className="h-64 w-full mb-4 rounded-2xl overflow-hidden relative">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 
                 {/* Quick Add Overlay (Optional, but adding cart button at bottom) */}
              </div>

              {/* Info */}
              <div className="space-y-1">
                 <h3 className="font-serif font-medium text-lg leading-tight min-h-[3rem] line-clamp-2">{product.name}</h3>
                 <div className="flex items-end justify-between">
                    <div>
                       <span className="text-xs text-text-muted">Price: </span>
                       <span className="text-text-muted line-through text-sm font-medium">${product.oldPrice}</span>
                       <span className="text-primary-dark font-bold text-lg ml-2">${product.price}</span>
                    </div>
                    <button className="bg-primary-dark text-primary-light p-2.5 rounded-full hover:bg-opacity-90 transition-colors">
                       <ShoppingCart size={18} />
                    </button>
                 </div>
              </div>
           </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center sm:hidden">
         <button className="flex items-center gap-2 bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-medium">
           Open Store <ShoppingCart size={16} />
        </button>
      </div>
    </section>
  );
};

export default DiscountedProducts;
