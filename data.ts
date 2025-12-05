import { Product, Category, BlogPost } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Top-tier gadgets, headphones, and smart devices.',
    image: 'https://images.unsplash.com/photo-1498049381929-c518532faf52?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c2',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    description: 'Essentials for a modern, efficient living space.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c3',
    name: 'Fitness & Health',
    slug: 'fitness',
    description: 'Gear to keep you moving and feeling your best.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c4',
    name: 'Books & Media',
    slug: 'books',
    description: 'Best-sellers, educational reads, and entertainment.',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'jbl-tune-flex',
    title: 'JBL Tune Flex - True Wireless Noise Cancelling Earbuds (Black), Small',
    category: 'electronics',
    price: 39.95,
    originalPrice: 99.95,
    rating: 4.5,
    reviewCount: 1250,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80', 
      'https://images.unsplash.com/photo-1572569028738-411a197b83cd?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'JBL Pure Bass Sound: Smartly designed 12mm drivers enhanced by the stick form factor deliver pulsing beats.',
    fullDescription: 'JBL Pure Bass Sound: Smartly designed 12mm drivers enhanced by the stick form factor deliver JBL\'s Pure Bass Sound so you\'ll feel every pulsing beat. Active Noise Cancelling with Smart Ambient: Hear more of what you want, less of what you don\'t. Active Noise Cancelling technology with 2 microphones lets you minimize audio distractions. With Ambient Aware, you can tune into your surroundings at any time so that you feel safer when you\'re out in the world, while TalkThru lets you stop for a quick chat without having to remove your headphones.',
    pros: ['Active Noise Cancelling', 'Up to 32 hours of battery life', 'Water resistant and sweatproof (IPX4)', '4 mics for perfect calls'],
    cons: ['Stick form factor preference varies', 'App required for full customization'],
    features: ['JBL Pure Bass Sound', 'Active Noise Cancelling', 'Smart Ambient', '4-mic technology', 'Speed Charge'],
    affiliateLink: 'https://amzn.to/3YaM8q6',
    isFeatured: true
  },
  {
    id: 'walkers-razor-slim',
    title: "Walker's Razor Slim Ultra Low Profile Compact Design Adjustable Range Shooting Hunting Hearing Protection Electronic Earmuffs",
    category: 'electronics',
    price: 38.76,
    originalPrice: 45.00, // Estimated original price for visual discount
    rating: 4.8,
    reviewCount: 24300,
    // Using a representative image for electronic earmuffs
    image: 'https://images.unsplash.com/photo-1545127398-14699f8d7df9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545127398-14699f8d7df9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f91f70?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: "Ultra low-profile electronic earmuffs with sound amplification and rugged protection.",
    fullDescription: "PROTECT YOUR HEARING - Walker's Razor Ear Muffs have an ultra low-profile design featuring extra slim ear cups, for a secure fit; these ear muffs protect against hazardous noises, while still letting you hear everything going on around you clearly. SOUND AMPLIFICATION - Walker's Razor Ear Muffs amplify safe sounds using two hi-gain microphones to provide clear omnidirectional hearing; The low-end frequencies are enhanced to produce accurate, natural sound. RUGGED DESIGN - These muffs feature a rugged design with a rubberized coating, helping to prevent damage to the interior.",
    pros: ['Ultra low-profile design', 'Omnidirectional microphones', 'Sound Activated Compression', 'Rugged rubberized coating'],
    cons: ['Requires 2 AAA batteries', 'Not fully waterproof'],
    features: ['2 Hi-Gain Omnidirectional Microphones', 'Audio Input Jack', 'Low Noise / Frequency tuned for natural sound clarity', 'Compact Folding Design'],
    affiliateLink: 'https://amazon.com', // Placeholder as no specific link was provided
    isFeatured: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Top 5 Noise Canceling Headphones of 2025',
    slug: 'top-5-headphones-2025',
    excerpt: 'We tested the market leaders to find out which cans actually silence the world around you.',
    content: `
      <h2>The Quest for Silence</h2>
      <p>Whether you are commuting, flying, or just trying to focus in a busy office, noise-canceling headphones are a modern necessity. In 2025, the technology has leaped forward.</p>
      <h3>1. Sony WH-1000XM5</h3>
      <p>Still the king of the hill, the XM5 offers a lightweight design and industry-leading ANC.</p>
      <h3>2. Bose QuietComfort Ultra</h3>
      <p>A very close second, with arguably better comfort for long flights.</p>
      <p>When choosing, consider battery life and multipoint connectivity as key differentiators.</p>
    `,
    author: 'Alex Techson',
    date: 'Oct 12, 2025',
    image: 'https://picsum.photos/800/400?random=100',
    tags: ['Audio', 'Reviews', 'Tech']
  },
  {
    id: 'b2',
    title: 'Home Office Essentials: Setup Guide',
    slug: 'home-office-essentials',
    excerpt: 'Boost your productivity with these must-have gadgets and furniture for remote work.',
    content: `
      <h2>Building the Perfect Workspace</h2>
      <p>Your environment dictates your productivity. Here is what you need:</p>
      <ul>
        <li>Ergonomic Chair</li>
        <li>Mechanical Keyboard</li>
        <li>Adjustable Monitor Arm</li>
      </ul>
      <p>Don't underestimate the power of good lighting. A simple monitor light bar can reduce eye strain significantly.</p>
    `,
    author: 'Sarah Freelancer',
    date: 'Sep 28, 2025',
    image: 'https://picsum.photos/800/400?random=101',
    tags: ['Productivity', 'Office', 'Guide']
  }
];