import React, { useContext } from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const totalItems = getTotalCartItems();

  return (
    <nav className="w-full px-4 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-sm border border-secondary">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full bg-primary-dark flex items-center justify-center text-white font-serif font-bold text-xl">
             E
           </div>
           <span className="text-2xl font-serif font-bold text-primary-dark tracking-wide">ELISA</span>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-text-main hover:text-primary-dark font-medium transition-colors text-sm uppercase tracking-wide">
            Home
          </Link>
          <Link to="/shop" className="text-text-main hover:text-primary-dark font-medium transition-colors text-sm uppercase tracking-wide">
            Store
          </Link>
          <Link to="/blog" className="text-text-main hover:text-primary-dark font-medium transition-colors text-sm uppercase tracking-wide">
            Blog
          </Link>
          <Link to="/sale" className="text-text-main hover:text-primary-dark font-medium transition-colors text-sm uppercase tracking-wide">
            Sale
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-secondary/50 px-3 py-1.5 rounded-full">
            <Search className="w-4 h-4 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none text-sm ml-2 w-24 placeholder:text-text-muted"
            />
          </div>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <User className="w-5 h-5 text-primary-dark" />
          </button>
          <Link to="/cart" className="p-2 hover:bg-secondary rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5 text-primary-dark" />
            {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary-dark text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                    {totalItems}
                </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
