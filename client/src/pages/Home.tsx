import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TestimonialSlider from '../components/TestimonialSlider';
import { testimonials } from '../lib/data';

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80" 
            alt="Women horseback riding" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
                Ride Free. <br />
                Dress Bold. <br />
                <span className="text-soft-pink">Be Miss Cowboy.</span>
              </h1>
              <p className="mt-6 text-xl font-montserrat">
                The modern community for women who love horses, western style, and living boldly.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-rustic-brown hover:bg-rustic-brown/90 text-white px-8 py-6 font-semibold rounded-md"
                >
                  <Link to="/join">Join Our Club</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-rustic-brown hover:bg-white/90 border-white px-8 py-6 font-semibold rounded-md"
                >
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Link to="/about" className="text-white opacity-80 hover:opacity-100">
              <ChevronDown className="h-8 w-8" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-rustic-brown">What Our Members Say</h2>
            <div className="w-24 h-1 bg-soft-pink mx-auto mt-4 rounded-full"></div>
          </div>
          
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
}
