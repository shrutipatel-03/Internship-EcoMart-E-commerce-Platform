import { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { categories } from '@/data/products';

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  className?: string;
}

export function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  className
}: FilterSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCategoryToggle = (category: string) => {
    if (category === 'all') {
      onCategoryChange(['all']);
    } else {
      const newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories.filter(c => c !== 'all'), category];
      
      onCategoryChange(newCategories.length === 0 ? ['all'] : newCategories);
    }
  };

  const clearFilters = () => {
    onCategoryChange(['all']);
    onPriceRangeChange([0, 8000]);
  };

  return (
    <Card className={`shadow-custom-sm ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>

      {(isExpanded || !className?.includes('md:block')) && (
        <CardContent className="space-y-6">
          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Categories</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryToggle(category)}
                    className="border-border data-[state=checked]:bg-primary"
                  />
                  <label
                    htmlFor={category}
                    className="text-sm text-foreground capitalize cursor-pointer hover:text-primary transition-smooth"
                  >
                    {category === 'all' ? 'All Products' : category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Price Range</h4>
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={(value) => onPriceRangeChange(value as [number, number])}
                max={8000}
                min={0}
                step={500}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <Button
            onClick={clearFilters}
            variant="outline"
            className="w-full hover:bg-accent transition-smooth"
          >
            Clear Filters
          </Button>
        </CardContent>
      )}
    </Card>
  );
}