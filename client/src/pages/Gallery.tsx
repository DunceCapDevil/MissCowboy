import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PhotoItem from '../components/PhotoItem';
import { galleryPhotos } from '../lib/data';

// Gallery categories
const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'trail', name: 'Trail Rides' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'events', name: 'Events' },
  { id: 'spotlight', name: 'Member Spotlights' },
];

export default function Gallery() {
  const [category, setCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter photos based on selected category
  const filteredPhotos = category === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(photo => photo.category === category);

  // Show more photos
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredPhotos.length));
  };

  // Get the photos to display based on visible count
  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  return (
    <motion.section 
      id="gallery" 
      className="pt-32 pb-20 bg-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-rustic-brown">Cowgirl Gallery</h2>
          <div className="w-24 h-1 bg-soft-pink mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Follow our community on Instagram <a href="#" className="text-denim-blue">@MissCowboyClub</a>
          </p>
        </div>
        
        <div className="flex overflow-x-auto py-4 hide-scrollbar space-x-4 mb-8">
          {/* Gallery Filter Pills */}
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
                category === cat.id
                  ? 'bg-rustic-brown text-white'
                  : 'bg-white hover:bg-rustic-brown hover:text-white'
              }`}
              onClick={() => {
                setCategory(cat.id);
                setVisibleCount(8); // Reset visible count when changing category
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={category}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {displayedPhotos.map((photo) => (
                <PhotoItem key={photo.id} photo={photo} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {visibleCount < filteredPhotos.length && (
          <div className="mt-12 text-center">
            <Button 
              variant="default"
              className="px-8 py-6 bg-rustic-brown hover:bg-rustic-brown/90 text-white font-semibold rounded-md"
              onClick={loadMore}
            >
              Load More <Plus className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
