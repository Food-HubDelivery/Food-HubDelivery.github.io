import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Bike, Plus } from "lucide-react";
import { toast } from "sonner";
import { restaurants } from "@/data/restaurants";
import { useCart } from "@/contexts/CartContext";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  
  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return <Navigate to="/404" replace />;
  }

  const handleAddToCart = (item: { id: number; name: string; price: number }) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
    });
    toast.success(`${item.name} added to cart!`);
  };

  const categories = [...new Set(restaurant.menu.map((item) => item.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="relative h-80">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
            <h1 className="text-4xl font-bold text-white mb-2">{restaurant.name}</h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-primary text-primary mr-1" />
                <span className="font-semibold">{restaurant.rating}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center">
                <Bike className="h-5 w-5 mr-1" />
                <span>{restaurant.deliveryFee === "Free" ? "Free delivery" : restaurant.deliveryFee}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-2 mb-8">
            {restaurant.cuisine.map((type) => (
              <Badge key={type} variant="secondary">{type}</Badge>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="grid gap-4">
                {restaurant.menu
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div 
                      key={item.id}
                      className="bg-card rounded-xl p-4 shadow-soft hover:shadow-medium transition-all flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                        <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                      </div>
                      <Button 
                        size="icon"
                        className="bg-gradient-primary hover:opacity-90 shrink-0"
                        onClick={() => handleAddToCart(item)}
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
