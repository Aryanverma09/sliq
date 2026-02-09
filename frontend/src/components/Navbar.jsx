
import React, { useContext, useState } from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { ShopContext } from '../context/ShopContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const { user } = useContext(AuthContext);
  const totalItems = getTotalCartItems();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-transparent border-none outline-none text-sm ml-2 w-24 placeholder:text-text-muted"
            />
          </div>
          <Link to={user ? "/profile" : "/login"} className="p-2 hover:bg-secondary rounded-full transition-colors relative group">
            <User className={`w-5 h-5 ${user ? "text-primary-dark" : "text-text-main"}`} />
            {user && (
               <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {user.name}
               </span>
            )}
          </Link>
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
