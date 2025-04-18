import { Link } from 'react-router-dom';
import { Instagram, Facebook, ChevronUp } from 'lucide-react';
import { FaTiktok, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rustic-brown text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-yellowtail text-3xl mb-4">Miss Cowboy</div>
            <p className="mb-6 opacity-80">Ride Free. Dress Bold. Be Miss Cowboy.</p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaTiktok size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition">
                <FaPinterestP size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition">Home</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition">About Us</Link></li>
              <li><Link to="/shop" className="opacity-80 hover:opacity-100 transition">Shop</Link></li>
              <li><Link to="/join" className="opacity-80 hover:opacity-100 transition">Join the Club</Link></li>
              <li><Link to="/gallery" className="opacity-80 hover:opacity-100 transition">Gallery</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Policies</h3>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition">Privacy Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition">Terms of Service</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition">Return Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition">Shipping Information</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition">Membership Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3 opacity-80">
              <div>
                123 Saddle Lane<br />
                Montana Plains, MT 59715
              </div>
              <div>(406) 555-RIDE</div>
              <div>hello@misscowboy.com</div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white border-opacity-20 flex justify-between items-center">
          <p className="opacity-60 text-sm">&copy; {new Date().getFullYear()} Miss Cowboy. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="opacity-60 hover:opacity-100 transition"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
