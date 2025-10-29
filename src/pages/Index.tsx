import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Footer } from "@/components/Footer";
import beveragesImg from "@/assets/category-beverages.jpg";
import pastaImg from "@/assets/category-pasta.jpg";
import chineseImg from "@/assets/category-chinese.jpg";
import burgersImg from "@/assets/category-burgers.jpg";
import seafoodImg from "@/assets/category-seafood.jpg";
import snacksImg from "@/assets/category-snacks.jpg";

const categories = [
  { name: "Beverages", image: beveragesImg, slug: "beverages" },
  { name: "Pasta", image: pastaImg, slug: "pasta" },
  { name: "Chinese", image: chineseImg, slug: "chinese" },
  { name: "Burgers", image: burgersImg, slug: "burgers" },
  { name: "Seafood", image: seafoodImg, slug: "seafood" },
  { name: "Snacks", image: snacksImg, slug: "snacks" },
];

const featuredRestaurants = [
  {
    id: 1,
    name: "Golden Dragon",
    image: chineseImg,
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    cuisine: ["Chinese", "Asian"],
  },
  {
    id: 2,
    name: "Pasta Paradise",
    image: pastaImg,
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.99",
    cuisine: ["Italian", "Pasta"],
  },
  {
    id: 3,
    name: "Ocean's Bounty",
    image: seafoodImg,
    rating: 4.9,
    deliveryTime: "35-45 min",
    deliveryFee: "Free",
    cuisine: ["Seafood", "Fresh"],
  },
  {
    id: 4,
    name: "Burger Haven",
    image: burgersImg,
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    cuisine: ["American", "Burgers"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div 
                key={category.slug}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Restaurants</h2>
            <a href="/restaurants" className="text-primary hover:underline font-semibold">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-warm py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Download Our App</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get exclusive deals and track your orders in real-time with our mobile app
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Download on App Store
              </button>
              <button className="px-8 py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Get it on Google Play
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
