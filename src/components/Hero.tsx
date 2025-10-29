import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Delicious Food
            <br />
            <span className="text-primary">Delivered to You</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Order from the best restaurants in your area
          </p>
          
          <div className="bg-white rounded-2xl p-2 shadow-large">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r pb-2 md:pb-0">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                <Input 
                  placeholder="Enter your delivery address" 
                  className="border-0 focus-visible:ring-0 px-0"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Food
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
