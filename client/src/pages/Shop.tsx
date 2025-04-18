import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { X, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ShopItem, { Product } from '../components/ShopItem';
import { products } from '../lib/data';
import { useCart } from '../context/CartContext';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Product categories
const categories = [
  { id: 'all', name: 'All' },
  { id: 'tops', name: 'Tops' },
  { id: 'bottoms', name: 'Bottoms' },
  { id: 'boots', name: 'Boots' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'sale', name: 'Sale' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [cartOpen, setCartOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();

  // Check if cart should be open from URL parameter
  useEffect(() => {
    if (searchParams.get('cart') === 'open') {
      setCartOpen(true);
      // Clean up the URL
      searchParams.delete('cart');
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  // Filter products when category changes
  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else if (category === 'sale') {
      setFilteredProducts(products.filter(product => product.originalPrice));
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  }, [category]);

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "This would proceed to checkout in a real implementation.",
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <motion.section 
      id="shop" 
      className="pt-32 pb-20 bg-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-rustic-brown">Shop Miss Cowboy</h2>
          <div className="w-24 h-1 bg-soft-pink mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Western-inspired styles for the modern cowgirl, from trail to town.</p>
        </div>
        
        <div className="flex overflow-x-auto py-4 hide-scrollbar space-x-4 mb-8">
          {/* Category Pills */}
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
                category === cat.id
                  ? 'bg-rustic-brown text-white'
                  : 'bg-white hover:bg-rustic-brown hover:text-white'
              }`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={category}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProducts.map((product) => (
                <ShopItem key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="default"
            className="px-8 py-6 bg-rustic-brown hover:bg-rustic-brown/90 text-white font-semibold rounded-md"
          >
            View All Products <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Shopping Cart Side Panel */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-playfair text-rustic-brown flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Your Cart
            </SheetTitle>
            <SheetDescription>
              {items.length === 0 ? 
                "Your cart is empty." : 
                `You have ${items.length} item(s) in your cart.`
              }
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6 flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center py-10">
                <ShoppingBag className="mx-auto h-12 w-12 text-muted" />
                <p className="mt-4 text-muted-foreground">Your cart is empty</p>
                <SheetClose asChild>
                  <Button 
                    variant="default" 
                    className="mt-4 bg-rustic-brown hover:bg-rustic-brown/90"
                    onClick={() => setCategory('all')}
                  >
                    Continue Shopping
                  </Button>
                </SheetClose>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex border-b pb-4">
                    <div className="h-24 w-24 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      <div className="mt-auto flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <span className="ml-auto font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <>
              <div className="space-y-4 mt-6 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <SheetFooter className="mt-6 gap-2 sm:space-x-2">
                <Button 
                  variant="outline" 
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
                <Button 
                  className="bg-rustic-brown hover:bg-rustic-brown/90"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </motion.section>
  );
}
