export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton T-Shirt",
    price: 2499,
    description: "Made from 100% organic cotton, this soft and comfortable t-shirt is perfect for everyday wear. Ethically sourced and sustainably produced.",
    image: "/src/assets/organic-tshirt.jpg",
    category: "clothing",
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2", 
    name: "Bamboo Water Bottle",
    price: 1999,
    description: "Stay hydrated with our eco-friendly bamboo water bottle. Features double-wall insulation to keep drinks cold for 24 hours or hot for 12 hours.",
    image: "/src/assets/bamboo-bottle.jpg",
    category: "accessories",
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: "3",
    name: "Recycled Backpack",
    price: 7499,
    description: "Durable backpack made from recycled plastic bottles. Features multiple compartments and laptop sleeve. Perfect for work, school, or travel.",
    image: "/src/assets/recycled-backpack.jpg",
    category: "accessories",
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: "4",
    name: "Solar Phone Charger",
    price: 4199,
    description: "Portable solar-powered phone charger with high-efficiency solar panels. Never run out of battery when you're outdoors.",
    image: "/src/assets/solar-charger.jpg",
    category: "electronics",
    inStock: true,
    rating: 4.6,
    reviews: 73
  },
  {
    id: "5",
    name: "Organic Skincare Set",
    price: 3299,
    description: "Complete skincare routine with organic ingredients. Includes cleanser, moisturizer, and serum in eco-friendly packaging.",
    image: "/src/assets/skincare-set.jpg",
    category: "beauty",
    inStock: true,
    rating: 4.9,
    reviews: 201
  },
  {
    id: "6",
    name: "Hemp Sneakers",
    price: 6799,
    description: "Comfortable and stylish sneakers made from sustainable hemp fiber. Breathable, durable, and perfect for casual wear.",
    image: "/src/assets/hemp-sneakers.jpg",
    category: "clothing",
    inStock: true,
    rating: 4.5,
    reviews: 92
  },
  {
    id: "7",
    name: "Compost Bin",
    price: 2899,
    description: "Start your composting journey with this compact kitchen compost bin. Features carbon filter to eliminate odors.",
    image: "/src/assets/compost-bin.jpg",
    category: "home",
    inStock: true,
    rating: 4.4,
    reviews: 67
  },
  {
    id: "8",
    name: "Reusable Food Wraps",
    price: 1599,
    description: "Set of 3 beeswax food wraps in different sizes. Perfect replacement for plastic wrap, completely biodegradable.",
    image: "/src/assets/food-wraps.jpg",
    category: "home",
    inStock: true,
    rating: 4.8,
    reviews: 134
  }
];

export const categories = [
  "all",
  "clothing",
  "accessories", 
  "electronics",
  "beauty",
  "home"
];