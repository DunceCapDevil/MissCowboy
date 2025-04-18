import { motion } from 'framer-motion';
import { HardHat, Users, MountainSnow } from 'lucide-react';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id="about" 
      className="pt-32 pb-20 bg-white"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={item}>
          <h2 className="text-4xl font-playfair font-bold text-rustic-brown">Our Story</h2>
          <div className="w-24 h-1 bg-soft-pink mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={item}>
            <h3 className="text-2xl font-playfair font-bold mb-6">The Miss Cowboy Mission</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Founded in 2020, Miss Cowboy was born from a passion for horses, western heritage, and female empowerment. 
              We believe in creating spaces where women can connect through their love of riding.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Our community celebrates the freedom of the trail, the bond between horse and rider, and the timeless style
              of western fashion with a modern twist.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="inline-block px-4 py-2 rounded-full bg-earthy-beige text-rustic-brown">Community</span>
              <span className="inline-block px-4 py-2 rounded-full bg-earthy-beige text-rustic-brown">Authenticity</span>
              <span className="inline-block px-4 py-2 rounded-full bg-earthy-beige text-rustic-brown">Empowerment</span>
            </div>
          </motion.div>
          
          <motion.div className="grid grid-cols-2 gap-4" variants={item}>
            <img 
              src="https://images.unsplash.com/photo-1527153098031-8904cf221b4e?auto=format&fit=crop&q=80" 
              alt="Woman with horse" 
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1596669829543-1966e1903fbf?auto=format&fit=crop&q=80" 
              alt="Cowgirl boots" 
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1598471995488-903fc5d63e8a?auto=format&fit=crop&q=80" 
              alt="Western style" 
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1597176116047-876a32798fca?auto=format&fit=crop&q=80" 
              alt="Horseback riding" 
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 bg-earthy-beige bg-opacity-20 rounded-xl p-8 md:p-12"
          variants={item}
        >
          <h3 className="text-2xl font-playfair font-bold mb-6 text-center">Our Community Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold mb-2">Horse-centered</h4>
              <p>We prioritize equine welfare and celebrate the special bond between horse and rider.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-denim-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold mb-2">Inclusive Sisterhood</h4>
              <p>We welcome riders of all backgrounds and experience levels who share our passion.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-rustic-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <MountainSnow className="text-white h-8 w-8" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold mb-2">Modern Western</h4>
              <p>We honor western traditions while embracing contemporary styles and forward-thinking values.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
