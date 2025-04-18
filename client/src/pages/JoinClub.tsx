import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  interests: z.object({
    trail: z.boolean().optional(),
    western: z.boolean().optional(),
    events: z.boolean().optional(),
    competition: z.boolean().optional(),
  }),
  referralSource: z.string().min(1, 'Please select a referral source'),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions'
  }),
});

type JoinFormValues = z.infer<typeof formSchema>;

export default function JoinClub() {
  const { toast } = useToast();
  const form = useForm<JoinFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      interests: {
        trail: false,
        western: false,
        events: false,
        competition: false,
      },
      referralSource: '',
      terms: false,
    },
  });

  const onSubmit = (data: JoinFormValues) => {
    toast({
      title: "Membership Application Submitted",
      description: `Thanks for joining, ${data.firstName}! We've sent a confirmation email to ${data.email}.`,
    });
    
    form.reset();
  };

  return (
    <motion.section 
      id="join" 
      className="pt-32 pb-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80" 
              alt="Group of women riding horses" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rustic-brown to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-playfair font-bold mb-4">The Sisterhood of the Saddle</h3>
              <p className="text-lg mb-4">Join thousands of women who share your passion for horses and western lifestyle.</p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">Monthly Trail Rides</div>
                <div className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">Exclusive Discounts</div>
                <div className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">Members-Only Events</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-left mb-8">
              <h2 className="text-4xl font-playfair font-bold text-rustic-brown">Join the Club</h2>
              <div className="w-24 h-1 bg-soft-pink mt-4 rounded-full"></div>
              <p className="mt-4 text-lg">Become part of our community of fearless, horse-loving women.</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Your first name" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Your last name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
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
                
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-3">Your Interests</Label>
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="interests.trail"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1 h-4 w-4 text-rustic-brown focus:ring-rustic-brown border-gray-300 rounded"
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Trail Riding</FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interests.western"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1 h-4 w-4 text-rustic-brown focus:ring-rustic-brown border-gray-300 rounded"
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Western Fashion</FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interests.events"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1 h-4 w-4 text-rustic-brown focus:ring-rustic-brown border-gray-300 rounded"
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Events & Meetups</FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interests.competition"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-1 h-4 w-4 text-rustic-brown focus:ring-rustic-brown border-gray-300 rounded"
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Competitions</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rustic-brown focus:border-rustic-brown">
                            <SelectValue placeholder="Please select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="friend">Friend/Family</SelectItem>
                          <SelectItem value="event">Event</SelectItem>
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1 h-4 w-4 text-rustic-brown focus:ring-rustic-brown border-gray-300 rounded"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal">
                          I agree to the <a href="#" className="text-denim-blue hover:underline">terms and conditions</a> and{' '}
                          <a href="#" className="text-denim-blue hover:underline">privacy policy</a>.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-rustic-brown hover:bg-rustic-brown/90 text-white font-semibold rounded-md"
                >
                  Join Miss Cowboy
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
