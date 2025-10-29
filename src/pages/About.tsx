import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { UtensilsCrossed, Heart, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-warm py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">About FoodHub</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to deliver happiness, one meal at a time
            </p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed">
                FoodHub is your trusted partner in food delivery. We connect you with the best 
                restaurants in your area, ensuring that every meal is delivered fresh, hot, and 
                on time. Our platform makes it easy to discover new cuisines, order from your 
                favorites, and enjoy restaurant-quality food in the comfort of your home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UtensilsCrossed className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Food</h3>
                <p className="text-muted-foreground">
                  We partner with top-rated restaurants to bring you the best culinary experiences.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Our efficient delivery network ensures your food arrives hot and fresh.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're here to help 24/7.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We support local restaurants and bring communities together through food.
                </p>
              </div>
            </div>

            <div className="bg-gradient-primary text-white p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Growing Family</h2>
              <p className="text-xl mb-6 opacity-90">
                Over 1 million satisfied customers and counting
              </p>
              <div className="flex flex-wrap justify-center gap-12 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="opacity-90">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5K+</div>
                  <div className="opacity-90">Restaurant Partners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="opacity-90">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
