import { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export type GalleryPhoto = {
  id: number;
  image: string;
  title: string;
  likes: number;
  comments: number;
  category: string;
};

type PhotoItemProps = {
  photo: GalleryPhoto;
};

export default function PhotoItem({ photo }: PhotoItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group overflow-hidden rounded-lg shadow-md h-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={photo.image}
        alt={photo.title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.8 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white w-full">
          <p className="font-montserrat font-medium">{photo.title}</p>
          <div className="flex items-center mt-1 text-sm">
            <Heart size={16} className="mr-1" /> {photo.likes}
            <MessageCircle size={16} className="ml-3 mr-1" /> {photo.comments}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
