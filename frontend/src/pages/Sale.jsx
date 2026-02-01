import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';

const Sale = () => {
  const { products, addToCart } = useContext(ShopContext);
  
  // Filter products that have a discount value (not null/undefined/empty string)
  const saleProducts = products.filter(p => p.discount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
         <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Limited Time Offers</span>
         <h1 className="text-4xl font-serif font-bold text-primary-dark mt-2 mb-4">Sale</h1>
         <p className="text-text-muted max-w-2xl mx-auto">
            Grab your favorites at unbeatable prices. Shop our exclusive sale collection now.
         </p>
      </div>
      
      {saleProducts.length === 0 ? (
        <div className="text-center py-20 bg-secondary/10 rounded-3xl">
           <h3 className="text-xl font-medium text-primary-dark">No items currently on sale.</h3>
           <p className="text-text-muted mt-2">Check back later for great deals!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {saleProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-3xl relative group hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
                {/* Badge */}
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-sm">
                    {product.discount}
                </span>
                
                {/* Wishlist */}
                <button className="absolute top-4 left-4 p-2 rounded-full hover:bg-secondary transition-colors z-10">
                    <Heart size={18} className="text-primary-dark" />
                </button>

                {/* Image */}
                <Link to={`/product/${product.id}`}>
                    <div className="h-64 w-full mb-4 rounded-2xl overflow-hidden relative cursor-pointer">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </Link>

                {/* Info */}
                <div className="space-y-1">
                    <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif font-medium text-lg leading-tight min-h-[3rem] line-clamp-2 hover:text-primary-dark transition-colors">{product.name}</h3>
                    </Link>
                    <div className="flex items-end justify-between">
                    <div>
                        <span className="text-xs text-text-muted">Price: </span>
                        {product.oldPrice && <span className="text-text-muted line-through text-sm font-medium mr-1">${product.oldPrice}</span>}
                        <span className="text-red-500 font-bold text-lg">${product.price}</span>
                    </div>
                    <button 
                        onClick={() => addToCart(product.id)}
                        className="bg-primary-dark text-white p-2.5 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                        <ShoppingCart size={18} />
                    </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Sale;
