import { Product } from "../components/ShopItem";
import { GalleryPhoto } from "../components/PhotoItem";
import { Testimonial } from "../components/TestimonialSlider";

// Products data
export const products: Product[] = [
  {
    id: 1,
    name: "Rodeo Queen Denim Shirt",
    price: 58.00,
    image: "https://images.unsplash.com/photo-1575846150178-62d13c49ebb3?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 42,
    category: "tops",
    badge: {
      text: "New",
      color: "soft-pink"
    }
  },
  {
    id: 2,
    name: "Trail Blazer Western Hat",
    price: 78.00,
    image: "https://images.unsplash.com/photo-1627245119575-283711d1aff3?auto=format&fit=crop&q=80",
    rating: 5,
    reviews: 28,
    category: "accessories"
  },
  {
    id: 3,
    name: "Frontier Leather Boots",
    price: 189.00,
    image: "https://images.unsplash.com/photo-1608626597747-0d9b8896c84c?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 87,
    category: "boots",
    badge: {
      text: "Bestseller",
      color: "rustic-brown"
    }
  },
  {
    id: 4,
    name: "Prairie Fringe Jacket",
    price: 149.00,
    originalPrice: 200.00,
    image: "https://images.unsplash.com/photo-1602910344008-22f323cc1817?auto=format&fit=crop&q=80",
    rating: 4,
    reviews: 56,
    category: "tops",
    badge: {
      text: "Sale",
      color: "denim-blue"
    }
  },
  {
    id: 5,
    name: "Wild West Embroidered Jeans",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 34,
    category: "bottoms"
  },
  {
    id: 6,
    name: "Sunset Ranch Tote Bag",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80",
    rating: 4,
    reviews: 19,
    category: "accessories"
  },
  {
    id: 7,
    name: "Bronco Wide Brim Hat",
    price: 72.00,
    image: "https://images.unsplash.com/photo-1517942466277-9f24439a78e2?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 48,
    category: "accessories"
  },
  {
    id: 8,
    name: "Horseshoe Pendant Necklace",
    price: 42.00,
    originalPrice: 55.00,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80",
    rating: 5,
    reviews: 23,
    category: "accessories",
    badge: {
      text: "Sale",
      color: "denim-blue"
    }
  }
];

// Gallery photos data
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515573866280-c9dcfc8b5250?auto=format&fit=crop&q=80",
    title: "Sunset Trail Ride",
    likes: 243,
    comments: 18,
    category: "trail"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1455048003985-c5ec93769110?auto=format&fit=crop&q=80",
    title: "Summer Hat Collection",
    likes: 187,
    comments: 24,
    category: "fashion"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1495841686748-2cf0e420f7d1?auto=format&fit=crop&q=80",
    title: "Weekend Group Ride",
    likes: 342,
    comments: 31,
    category: "events"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1567091141737-e2cc216d14a9?auto=format&fit=crop&q=80",
    title: "Annual Spring Gathering",
    likes: 154,
    comments: 12,
    category: "events"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1627245862528-2021aad003b2?auto=format&fit=crop&q=80",
    title: "Fashion Feature: Sarah",
    likes: 287,
    comments: 36,
    category: "fashion"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1521291895576-7f999d6a4c73?auto=format&fit=crop&q=80",
    title: "Essential Cowgirl Kit",
    likes: 198,
    comments: 22,
    category: "fashion"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1564864041860-3f55db1f14dd?auto=format&fit=crop&q=80",
    title: "Member Spotlight: Jessica",
    likes: 326,
    comments: 41,
    category: "spotlight"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1605985687770-2e2b32f40162?auto=format&fit=crop&q=80",
    title: "Montana Retreat",
    likes: 215,
    comments: 19,
    category: "events"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1581552308068-9c6bf5edebd4?auto=format&fit=crop&q=80",
    title: "Morning Prairie Ride",
    likes: 275,
    comments: 24,
    category: "trail"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1537317815503-896f95f56529?auto=format&fit=crop&q=80",
    title: "Member Spotlight: Rachel",
    likes: 183,
    comments: 16,
    category: "spotlight"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1616022090518-6a918c249190?auto=format&fit=crop&q=80",
    title: "Texas Trail Adventures",
    likes: 302,
    comments: 29,
    category: "trail"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1611516191088-4e036800c528?auto=format&fit=crop&q=80",
    title: "Summer Collection Preview",
    likes: 227,
    comments: 33,
    category: "fashion"
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jessica T.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    memberSince: "2021",
    rating: 5,
    text: "Miss Cowboy has completely transformed my riding experience. I've met amazing women and discovered beautiful trails I never knew existed. Plus, their apparel is top-notch!"
  },
  {
    id: 2,
    name: "Melissa R.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    memberSince: "2020",
    rating: 5,
    text: "The community aspect of Miss Cowboy is what keeps me coming back. Every event feels like a reunion with friends who share my passion. The merchandise quality is incredible too!"
  },
  {
    id: 3,
    name: "Ashley K.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    memberSince: "2022",
    rating: 4.5,
    text: "As a newcomer to the equestrian world, I was worried about fitting in. Miss Cowboy welcomed me warmly and helped me grow as a rider. Their beginner-friendly events are fantastic!"
  },
  {
    id: 4,
    name: "Sarah M.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    memberSince: "2021",
    rating: 5,
    text: "I love how Miss Cowboy balances traditional western style with modern trends. The community is supportive and the monthly trail rides have become the highlight of my schedule!"
  },
  {
    id: 5,
    name: "Lauren B.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    memberSince: "2020",
    rating: 4,
    text: "The exclusive member discounts have paid for my membership many times over. I especially love the seasonal collections and the way they blend functionality with fashion."
  }
];
