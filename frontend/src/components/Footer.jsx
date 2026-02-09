import React from 'react';
import { Instagram, Send, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4a1017] text-[#fdf2f2] pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
             <div className="text-3xl font-serif font-bold tracking-wide">ELISA</div>
             <p className="text-sm text-white/70 leading-relaxed">
               Rotonda Cadorna 3, Monza-veneto, 20900 Bergamo (VS)<br/>
               elisacosmetics@gmail.com
             </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-serif text-lg mb-6">Menu</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Cart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

           {/* Social Links */}
           <div>
            <h4 className="font-serif text-lg mb-6">Social Links</h4>
             <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><Instagram size={16}/> <a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li className="flex items-center gap-2"><Send size={16}/> <a href="#" className="hover:text-white transition-colors">Telegram</a></li>
              <li className="flex items-center gap-2"><Facebook size={16}/> <a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>Copyright © ELISA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
