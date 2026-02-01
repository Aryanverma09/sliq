import React, { useContext } from 'react';
import { useParams, Link } from 'react-router';
import { ShopContext } from '../context/ShopContext';
import { ShoppingCart, Star, ArrowLeft, Heart } from 'lucide-react';

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  
  const product = products.find((e) => e.id === Number(productId));

  if (!product) {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Product Not Found</h2>
            <Link to="/shop" className="text-primary-dark underline">Back to Shop</Link>
        </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-text-muted hover:text-primary-dark mb-8 transition-colors">
            <ArrowLeft size={18} /> Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery (Single Image for now) */}
            <div className="bg-[#f8f8f8] rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto md:h-[600px] relative group">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <button className="absolute top-6 right-6 p-3 bg-white rounded-full hover:bg-secondary transition-colors shadow-sm">
                    <Heart size={20} className="text-primary-dark" />
                </button>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
                <div className="mb-2">
                    <span className="bg-secondary/30 text-primary-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {product.category}
                    </span>
                    {product.discount && (
                        <span className="ml-2 bg-primary-dark text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {product.discount}
                        </span>
                    )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-4 leading-tight">
                    {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-text-muted text-sm">(124 Reviews)</span>
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <span className="text-3xl font-bold text-primary-dark">${product.price}</span>
                    {product.oldPrice && (
                        <span className="text-xl text-text-muted line-through">${product.oldPrice}</span>
                    )}
                </div>

                <p className="text-text-muted leading-relaxed mb-10 text-lg">
                    {product.description}
                </p>

                <div className="flex gap-4">
                    <button 
                        onClick={() => addToCart(product.id)}
                        className="flex-1 bg-primary-dark text-white py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                    >
                        <ShoppingCart size={20} /> Add to Cart
                    </button>
                </div>
                
                <div className="mt-12 pt-8 border-t border-secondary">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <h4 className="font-bold text-primary-dark mb-1">Free Shipping</h4>
                            <p className="text-xs text-text-muted">On orders over $50</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary-dark mb-1">Returns</h4>
                            <p className="text-xs text-text-muted">30 day easy returns</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary-dark mb-1">Secure</h4>
                            <p className="text-xs text-text-muted">100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductDetails;
