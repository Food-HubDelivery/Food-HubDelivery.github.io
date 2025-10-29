import { Navigation } from "@/components/Navigation";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { restaurants } from "@/data/restaurants";

const Restaurants = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-warm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">All Restaurants</h1>
            <div className="max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search restaurants..." 
                  className="pl-12 h-12 bg-background shadow-soft"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;
