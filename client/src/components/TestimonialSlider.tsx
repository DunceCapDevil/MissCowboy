import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

export type Testimonial = {
  id: number;
  name: string;
  image: string;
  memberSince: string;
  rating: number;
  text: string;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-yellow-500'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ));
  };

  return (
    <div className="relative testimonial-slider">
      <div className="testimonial-wrapper overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {testimonials.map((testimonial, index) => {
              // Calculate the index for the visible testimonials in the slider
              // For a 3-column layout, we show currentIndex, currentIndex+1, and currentIndex+2
              const visibleIndices = [];
              for (let i = 0; i < 3; i++) {
                visibleIndices.push((currentIndex + i) % testimonials.length);
              }

              if (!visibleIndices.includes(index)) return null;

              return (
                <div key={testimonial.id} className="p-4">
                  <div className="bg-white p-8 rounded-xl shadow-md h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-14 h-14 rounded-full object-cover mr-4" 
                        />
                        <div>
                          <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">Member since {testimonial.memberSince}</p>
                        </div>
                      </div>
                      <div className="text-soft-pink">
                        <Quote className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex text-yellow-500 mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-rustic-brown' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
