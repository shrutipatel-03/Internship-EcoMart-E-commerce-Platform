import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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

export default function Cart() {
  const [searchQuery, setSearchQuery] = useState('');
  const { items, total, itemCount, updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart.",
      });
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeItem(productId);
    toast({
      title: "Item removed",
      description: `${productName} has been removed from your cart.`,
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Your cart is empty</h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                Start shopping to add some amazing eco-friendly products to your cart!
              </p>
            </div>
            <Link to="/">
              <Button className="bg-gradient-primary hover:shadow-glow transition-smooth btn-glow" size="lg">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
              <p className="text-muted-foreground">
                {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            <Link to="/">
              <Button variant="outline" className="hover:bg-accent transition-smooth">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="shadow-custom-sm hover:shadow-custom-md transition-smooth">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={imageMap[item.image] || item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <Link 
                          to={`/products/${item.id}`}
                          className="text-xl font-semibold text-foreground hover:text-primary transition-smooth"
                        >
                          {item.name}
                        </Link>
                        <p className="text-muted-foreground capitalize mt-1">
                          Category: {item.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-foreground">Qty:</span>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-12 text-center font-medium text-foreground">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ₹{item.price.toLocaleString('en-IN')} each
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 transition-smooth"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-custom-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Items */}
                <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="font-medium text-foreground">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-success">Free</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium text-foreground">₹{(total * 0.18).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold border-t border-border pt-4">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">₹{(total * 1.18).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <Link to="/checkout" className="block">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth btn-glow" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Free shipping on all orders</p>
                  <p>30-day money-back guarantee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}