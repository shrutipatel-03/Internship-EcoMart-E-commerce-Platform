import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Leaf, Recycle, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} searchQuery="" />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Leaf className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About EcoMart
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in sustainable living. We're dedicated to bringing you eco-friendly products 
            that make a positive impact on our planet while enhancing your lifestyle.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-accent/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              To make sustainable living accessible and affordable for everyone. We believe that small changes 
              in our daily choices can create a significant positive impact on the environment. Every product 
              we offer is carefully selected to meet the highest standards of sustainability and quality.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                Every product is chosen for its minimal environmental impact and sustainable production methods.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We partner with trusted brands that share our commitment to high-quality, durable products.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
              <p className="text-muted-foreground">
                Building a community of conscious consumers who care about the planet's future.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, EcoMart started as a small initiative to make eco-friendly products 
                  more accessible to Indian consumers. We noticed a growing awareness about environmental 
                  issues but limited options for sustainable alternatives.
                </p>
                <p>
                  What began as a passion project has grown into a trusted platform serving thousands 
                  of customers across India. We work directly with manufacturers and artisans who share 
                  our vision of a greener future.
                </p>
                <p>
                  Today, we're proud to offer a curated selection of products that prove you don't have 
                  to compromise on quality or style to make environmentally conscious choices.
                </p>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground mb-6">Happy Customers</div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground mb-6">Eco-Friendly Products</div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Sustainable Sourcing</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions about our products or want to learn more about sustainable living? 
            We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-accent/50 rounded-lg p-4">
              <div className="font-semibold text-foreground">Email</div>
              <div className="text-muted-foreground">hello@ecomart.in</div>
            </div>
            <div className="bg-accent/50 rounded-lg p-4">
              <div className="font-semibold text-foreground">Phone</div>
              <div className="text-muted-foreground">+91 98765 43210</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}