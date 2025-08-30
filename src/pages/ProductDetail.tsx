import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';
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

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) 
            ? 'fill-primary text-primary' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden shadow-custom-lg">
              <CardContent className="p-0">
                <img
                  src={imageMap[product.image] || product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <Badge variant="secondary" className="capitalize">
                {product.category}
              </Badge>
              
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="text-4xl font-bold text-primary">
                ₹{product.price.toLocaleString('en-IN')}
              </div>

              {product.inStock ? (
                <Badge variant="default" className="bg-success text-success-foreground">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive">
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-foreground">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-16 text-center font-medium text-foreground">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth btn-glow"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ₹{(product.price * quantity).toLocaleString('en-IN')}
                </Button>
                
                <Button variant="outline" size="lg" className="hover:bg-accent transition-smooth">
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
                
                <Button variant="outline" size="lg" className="hover:bg-accent transition-smooth">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card className="bg-muted/50 shadow-custom-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Why Choose This Product?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 100% Sustainable Materials</li>
                  <li>✓ Ethically Sourced & Produced</li>
                  <li>✓ Carbon Neutral Shipping</li>
                  <li>✓ 30-Day Money Back Guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}