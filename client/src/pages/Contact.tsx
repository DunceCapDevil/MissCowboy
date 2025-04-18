import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { FaTiktok, FaPinterestP } from 'react-icons/fa';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    
    form.reset();
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Newsletter Subscription",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setNewsletterEmail('');
  };

  return (
    <motion.section 
      id="contact" 
      className="pt-32 pb-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="text-left mb-8">
              <h2 className="text-4xl font-playfair font-bold text-rustic-brown">Get in Touch</h2>
              <div className="w-24 h-1 bg-soft-pink mt-4 rounded-full"></div>
              <p className="mt-4 text-lg">Have questions or suggestions? We'd love to hear from you!</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter your name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown">
                            <SelectValue placeholder="Please select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="membership">Membership Question</SelectItem>
                          <SelectItem value="product">Product Inquiry</SelectItem>
                          <SelectItem value="event">Event Information</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Type your message here..." 
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="px-6 py-3 bg-rustic-brown hover:bg-rustic-brown/90 text-white font-semibold rounded-md"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-2xl font-playfair font-bold mb-6">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for monthly updates, exclusive content, and special offers.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown"
                />
                <Button 
                  type="submit"
                  className="px-6 py-3 bg-rustic-brown hover:bg-rustic-brown/90 text-white font-semibold rounded-md whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            
            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-2xl font-playfair font-bold mb-6">Follow Us</h3>
              <p className="mb-6">Join our social community for daily inspiration and updates.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-rustic-brown rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-denim-blue rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition">
                  <FaTiktok size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-earthy-beige rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition">
                  <FaPinterestP size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-2xl font-playfair font-bold mb-6">Visit Us</h3>
              <address className="not-italic space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-rustic-brown mt-1 mr-3 w-5" />
                  <span>
                    Miss Cowboy Headquarters<br />
                    123 Saddle Lane<br />
                    Montana Plains, MT 59715
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-rustic-brown mr-3 w-5" />
                  <span>(406) 555-RIDE</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-rustic-brown mr-3 w-5" />
                  <span>hello@misscowboy.com</span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
