import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
              <Leaf className="h-8 w-8" />
              <span>EcoMart</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for sustainable, eco-friendly products. 
              Together, we're building a greener future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Home
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Products
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/products?category=clothing" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Clothing
              </Link>
              <Link to="/products?category=accessories" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Accessories
              </Link>
              <Link to="/products?category=electronics" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Electronics
              </Link>
              <Link to="/products?category=home" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Home & Garden
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@ecomart.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Green St, Eco City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EcoMart. All rights reserved. Built with love for our planet.
          </p>
        </div>
      </div>
    </footer>
  );
}