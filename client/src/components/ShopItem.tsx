import { useState } from 'react';
import { Star, StarHalf, Eye, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '../context/CartContext';

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: {
    text: string;
    color: string;
  };
};

type ShopItemProps = {
  product: Product;
};

export default function ShopItem({ product }: ShopItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const { id, name, price, image } = product;
    addToCart({ id, name, price, image });
    
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const quickView = () => {
    toast({
      title: "Quick view",
      description: `Viewing ${product.name}`,
    });
  };

  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-500 text-yellow-500" size={16} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-500 text-yellow-500" size={16} />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-yellow-500" size={16} />);
    }
    
    return stars;
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        
        {product.badge && (
          <div className="absolute top-0 right-0 m-2">
            <span className={`bg-${product.badge.color} text-white text-xs uppercase font-bold px-2 py-1 rounded`}>
              {product.badge.text}
            </span>
          </div>
        )}
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-2 px-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex space-x-2">
            <button 
              onClick={quickView}
              className="flex-1 bg-white text-rustic-brown py-2 rounded font-semibold flex items-center justify-center"
            >
              <Eye size={16} className="mr-2" />
              Quick View
            </button>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-rustic-brown text-white py-2 rounded font-semibold flex items-center justify-center"
            >
              <ShoppingBag size={16} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="p-4">
        <h3 className="font-playfair font-bold text-lg">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            {product.originalPrice ? (
              <>
                <span className="font-montserrat font-semibold text-denim-blue">
                  ${product.price.toFixed(2)}
                </span>
                <span className="font-montserrat text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-montserrat font-semibold text-denim-blue">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="flex mr-1">
              {renderStars()}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
