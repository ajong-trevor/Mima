
import type { Pastry, Category, Review, NavItem, Tutorial } from '@/types';
import { Home, ShoppingBag, Bot, Phone, CakeSlice, CookieIcon, Blend, Croissant, Youtube } from 'lucide-react';

export const categories: Category[] = [
  { id: 'cakes', name: 'Cakes', icon: CakeSlice },
  { id: 'cookies', name: 'Cookies', icon: CookieIcon },
  { id: 'meat-pies', name: 'Meat Pies', icon: Blend },
  { id: 'doughnuts', name: 'Doughnuts', icon: Croissant },
];

export const pastries: Pastry[] = [
  {
    id: '1',
    name: 'Chocolate Fudge Cake',
    description: 'Rich, moist chocolate cake with a creamy fudge frosting.',
    longDescription: 'Indulge in layers of dark, moist chocolate cake generously filled and frosted with our signature smooth chocolate fudge. Perfect for celebrations or a decadent treat for yourself.',
    price: '$25.00',
    imageUrl: '/images/pastries/pastry1.png',
    dataAiHint: 'chocolate cake',
    category: 'cakes',
  },
  {
    id: '2',
    name: 'Classic Meat Pie',
    description: 'Savory minced meat filling in a flaky golden crust.',
    longDescription: 'Our classic meat pie features a hearty, savory filling of perfectly seasoned minced meat and vegetables, all encased in a buttery, flaky golden-brown crust. A comforting and satisfying meal.',
    price: '$5.50',
    imageUrl: '/images/pastries/pastry2.png',
    dataAiHint: 'meat pie',
    category: 'meat-pies',
  },
  {
    id: '3',
    name: 'Glazed Doughnuts',
    description: 'Soft, fluffy doughnuts with a sweet vanilla glaze.',
    longDescription: 'Experience the simple joy of our classic glazed doughnuts. These light, airy yeast doughnuts are fried to golden perfection and coated in a sweet, delicate vanilla glaze.',
    price: '$2.00',
    imageUrl: '/images/pastries/pastry3.jpg',
    dataAiHint: 'glazed doughnut',
    category: 'doughnuts',
  },
  {
    id: '4',
    name: 'Oatmeal Raisin Cookies',
    description: 'Chewy oatmeal cookies packed with sweet raisins.',
    longDescription: 'Enjoy a timeless classic with our oatmeal raisin cookies. These delightfully chewy cookies are made with wholesome rolled oats and are generously studded with sweet, plump raisins and a hint of cinnamon.',
    price: '$1.50',
    imageUrl: '/images/pastries/pastry4.jpg',
    dataAiHint: 'oatmeal cookie',
    category: 'cookies',
  },
  {
    id: '5',
    name: 'Strawberry Shortcake',
    description: 'Light sponge cake, fresh strawberries, and whipped cream.',
    longDescription: 'Celebrate the season with our delightful Strawberry Shortcake. Featuring layers of light and airy sponge cake, fresh, juicy strawberries, and generous dollops of freshly whipped cream.',
    price: '$22.00',
    imageUrl: '/images/pastries/pastry5.jpg',
    dataAiHint: 'strawberry cake',
    category: 'cakes',
  },
  {
    id: '6',
    name: 'Chicken & Mushroom Pie',
    description: 'Creamy chicken and mushroom filling in a puff pastry.',
    longDescription: 'A delightful pie with tender chicken pieces and savory mushrooms in a rich, creamy sauce, all topped with a flaky puff pastry lid. A truly comforting and delicious choice.',
    price: '$6.00',
    imageUrl: '/images/pastries/pastry6.jpg',
    dataAiHint: 'chicken pie',
    category: 'meat-pies',
  },
  {
    id: '7',
    name: 'Jelly-Filled Doughnuts',
    description: 'Soft doughnuts bursting with sweet raspberry jelly.',
    longDescription: 'Our jelly-filled doughnuts are a sweet surprise! Soft, pillowy dough is fried to perfection and then generously filled with a vibrant, sweet raspberry jelly, and lightly dusted with powdered sugar.',
    price: '$2.50',
    imageUrl: '/images/pastries/pastry7.jpg',
    dataAiHint: 'jelly doughnut',
    category: 'doughnuts',
  },
  {
    id: '8',
    name: 'Chocolate Chip Cookies',
    description: 'Classic cookies with generous chocolate chips.',
    longDescription: 'The ultimate classic! Our chocolate chip cookies are perfectly baked to be soft and chewy on the inside with slightly crisp edges, and are loaded with rich, melt-in-your-mouth chocolate chips.',
    price: '$1.75',
    imageUrl: '/images/pastries/pastry8.jpg',
    dataAiHint: 'chocolate chip cookie',
    category: 'cookies',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    customerName: 'Alice Wonderland',
    reviewText: "Mima's Delights has the best chocolate cake I've ever tasted! So moist and rich. Highly recommend!",
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'happy person',
  },
  {
    id: '2',
    customerName: 'Bob The Builder',
    reviewText: 'The meat pies are fantastic. Perfect crust and flavorful filling. A go-to for a quick, satisfying lunch.',
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'satisfied customer',
  },
  {
    id: '3',
    customerName: 'Charlie Brown',
    reviewText: 'Doughnuts were fresh and delicious. The glaze was just right, not too sweet. Kids loved them!',
    rating: 4,
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'person eating',
  },
  {
    id: '4',
    customerName: 'Diana Prince',
    reviewText: 'The oatmeal raisin cookies remind me of my grandma\'s baking. Chewy, flavorful, and simply perfect with a cup of tea.',
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'smiling woman',
  },
];

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/pastries', label: 'Pastries', icon: ShoppingBag },
  { href: '/baking-tutorials', label: 'Tutorials', icon: Youtube },
  { href: '/ai-helper', label: 'AI Helper', icon: Bot },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Mastering the Perfect Chocolate Cake',
    description: 'Learn step-by-step how to bake a rich and moist chocolate cake that will impress everyone.',
    videoUrl: '#', // Placeholder for actual video link
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'baking chocolate cake',
  },
  {
    id: '2',
    title: 'Baking Flaky Meat Pies from Scratch',
    description: 'Discover the secrets to a perfect savory meat pie with a golden, flaky crust.',
    videoUrl: '#',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'baking meat pie',
  },
  {
    id: '3',
    title: 'Easy Glazed Doughnuts Tutorial',
    description: 'A simple guide to making soft, fluffy glazed doughnuts at home. Fun for the whole family!',
    videoUrl: '#',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'making doughnuts',
  },
  {
    id: '4',
    title: 'Chewy Oatmeal Raisin Cookies Recipe',
    description: 'Bake the best oatmeal raisin cookies with this easy-to-follow recipe. Perfect texture guaranteed!',
    videoUrl: '#',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'baking cookies',
  },
];
