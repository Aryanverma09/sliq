
import React, { useContext, useMemo } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';

const Shop = () => {
  const { products, addToCart } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) || 
      product.category.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  }, [products, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-primary-dark mb-8 text-center">
        {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All Products'}
      </h1>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-text-muted">No products found matching your search.</p>
          <Link to="/shop" className="mt-4 inline-block text-primary-dark hover:underline font-medium">
            View all products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-3xl relative group hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
               {/* Badge */}
               {product.discount && (
                 <span className="absolute top-4 right-4 bg-primary-dark text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                   {product.discount}
                 </span>
               )}
               
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
                        <span className="text-primary-dark font-bold text-lg">${product.price}</span>
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

export default Shop;
