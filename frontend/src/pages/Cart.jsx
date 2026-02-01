import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const Cart = () => {
  const { cartItems, getTotalCartAmount, products, removeFromCart, updateCartItemCount, addToCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  if (totalAmount === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-serif font-bold text-primary-dark mb-4">Your Cart is Empty</h1>
        <p className="text-text-muted mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="inline-block bg-primary-dark text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-primary-dark mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {products.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <div key={product.id} className="flex gap-4 bg-white p-4 rounded-3xl border border-secondary/20 shadow-sm">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                         <h3 className="font-serif font-medium text-lg text-primary-dark">{product.name}</h3>
                         <p className="text-sm text-text-muted">{product.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(product.id)}
                        className="text-text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-3 bg-secondary/30 rounded-full px-3 py-1">
                        <button 
                            onClick={() => removeFromCart(product.id)}
                            className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-primary-dark shadow-sm hover:bg-secondary transition-colors"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="font-medium w-4 text-center">{cartItems[product.id]}</span>
                        <button 
                            onClick={() => addToCart(product.id)}
                            className="w-6 h-6 flex items-center justify-center bg-primary-dark text-white rounded-full shadow-sm hover:bg-opacity-90 transition-colors"
                        >
                            <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-primary-dark">${product.price * cartItems[product.id]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
           <div className="bg-white p-6 rounded-3xl border border-secondary/20 shadow-sm sticky top-24">
              <h2 className="text-xl font-serif font-bold text-primary-dark mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-text-muted">
                   <span>Subtotal</span>
                   <span>${totalAmount}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                   <span>Shipping</span>
                   <span>Free</span>
                </div>
                <div className="h-px bg-secondary my-2"></div>
                <div className="flex justify-between font-bold text-lg text-primary-dark">
                   <span>Total</span>
                   <span>${totalAmount}</span>
                </div>
              </div>

              <button className="w-full bg-primary-dark text-white py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-colors mb-4">
                 Checkout
              </button>
              
              <Link to="/shop" className="flex items-center justify-center gap-2 text-text-muted hover:text-primary-dark transition-colors text-sm font-medium">
                 <ArrowLeft size={16} /> Continue Shopping
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
