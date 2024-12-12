import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Professional Dumbbell Set',
    description: 'Adjustable weight set perfect for home workouts',
    price: 299.99,
    category: 'sports-equipment',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    stock: 10,
  },
  {
    id: '2',
    name: 'Urban Bench',
    description: 'Modern design bench for public spaces',
    price: 599.99,
    category: 'urban-furniture',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    stock: 5,
    quoteOnly: true,
  },
  {
    id: '3',
    name: 'Performance T-Shirt',
    description: 'Moisture-wicking fabric for intense workouts',
    price: 29.99,
    category: 'sportswear',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    stock: 50,
  },
  {
    id: '4',
    name: 'Olympic Barbell',
    description: 'Competition-grade Olympic barbell',
    price: 249.99,
    category: 'sports-equipment',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    stock: 15,
  },
  {
    id: '5',
    name: 'Park Seating Set',
    description: 'Durable outdoor seating solution',
    price: 899.99,
    category: 'urban-furniture',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    stock: 3,
    quoteOnly: true,
  },
  {
    id: '6',
    name: 'Training Shorts',
    description: 'Comfortable shorts for any workout',
    price: 34.99,
    category: 'sportswear',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    stock: 75,
  },
];