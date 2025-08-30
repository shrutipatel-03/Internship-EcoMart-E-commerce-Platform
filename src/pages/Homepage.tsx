import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Sparkles, Leaf, Recycle, Heart } from 'lucide-react';

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 8000]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategories.includes('all') || 
                             selectedCategories.includes(product.category);

      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategories, priceRange]);

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Shop Sustainable,
                <br />
                <span className="text-primary-light">Live Better</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Discover eco-friendly products that make a difference for you and our planet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth btn-glow">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 animate-pulse">
              <Leaf className="h-32 w-32 text-primary-foreground" />
            </div>
            <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
              <Recycle className="h-24 w-24 text-primary-foreground" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">100% Sustainable</h3>
                <p className="text-muted-foreground">All our products are ethically sourced and environmentally friendly</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Made with Love</h3>
                <p className="text-muted-foreground">Every product is crafted with care for people and planet</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Recycle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Zero Waste</h3>
                <p className="text-muted-foreground">Recyclable packaging and minimal environmental impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our curated collection of sustainable products
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters */}
              <div className="lg:w-80 flex-shrink-0">
                <FilterSidebar
                  selectedCategories={selectedCategories}
                  onCategoryChange={setSelectedCategories}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  className="sticky top-24"
                />
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                {filteredProducts.length > 0 ? (
                  <>
                    <div className="mb-6">
                      <p className="text-muted-foreground">
                        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                        {searchQuery && ` for "${searchQuery}"`}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">No products found</h3>
                    <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
                    <Button 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategories(['all']);
                        setPriceRange([0, 8000]);
                      }}
                      className="bg-gradient-primary hover:shadow-glow transition-smooth"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}