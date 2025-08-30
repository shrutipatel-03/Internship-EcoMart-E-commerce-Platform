import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

// Import product images
import organicTshirt from '@/assets/organic-tshirt.jpg';
import bambooBottle from '@/assets/bamboo-bottle.jpg';
import recycledBackpack from '@/assets/recycled-backpack.jpg';
import solarCharger from '@/assets/solar-charger.jpg';
import skincareSet from '@/assets/skincare-set.jpg';
import hempSneakers from '@/assets/hemp-sneakers.jpg';
import compostBin from '@/assets/compost-bin.jpg';
import foodWraps from '@/assets/food-wraps.jpg';

const imageMap: Record<string, string> = {
  '/src/assets/organic-tshirt.jpg': organicTshirt,
  '/src/assets/bamboo-bottle.jpg': bambooBottle,
  '/src/assets/recycled-backpack.jpg': recycledBackpack,
  '/src/assets/solar-charger.jpg': solarCharger,
  '/src/assets/skincare-set.jpg': skincareSet,
  '/src/assets/hemp-sneakers.jpg': hempSneakers,
  '/src/assets/compost-bin.jpg': compostBin,
  '/src/assets/food-wraps.jpg': foodWraps,
};

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

export function ProductCard({ product, layout = 'grid' }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'fill-primary text-primary' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <Card className="group product-card bg-gradient-card shadow-custom-sm hover:shadow-custom-md border border-border/50">
      <Link to={`/products/${product.id}`}>
        <CardContent className="p-0">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
            <img
              src={imageMap[product.image] || product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Category Badge */}
            <div className="inline-flex">
              <span className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md capitalize">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">
                ₹{product.price}
              </span>
              
              {product.inStock ? (
                <span className="text-sm text-success font-medium">
                  In Stock
                </span>
              ) : (
                <span className="text-sm text-destructive font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full btn-glow bg-gradient-primary hover:shadow-glow transition-smooth"
              size="lg"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}