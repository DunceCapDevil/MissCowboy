import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

type NavLink = {
  path: string;
  label: string;
};

const links: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/shop', label: 'Shop' },
  { path: '/join', label: 'Join the Club' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-opacity-95' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-yellowtail text-3xl text-rustic-brown">
              Miss Cowboy
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-rustic-brown hover:text-denim-blue font-montserrat font-medium transition-colors ${
                  location.pathname === link.path ? 'text-denim-blue' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/shop?cart=open">
              <Button variant="default" className="bg-rustic-brown hover:bg-rustic-brown/90 text-white rounded-full px-3 py-2">
                <ShoppingBag className="h-5 w-5 mr-1" />
                Cart ({itemCount})
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-rustic-brown"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === link.path
                      ? 'bg-earthy-beige bg-opacity-20 text-denim-blue'
                      : 'text-rustic-brown hover:bg-earthy-beige hover:bg-opacity-20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/shop?cart=open"
                className="block px-3 py-2 text-white bg-rustic-brown rounded-md"
              >
                <ShoppingBag className="h-5 w-5 inline mr-2" />
                Cart ({itemCount})
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
