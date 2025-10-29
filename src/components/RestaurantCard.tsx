import { Link } from "react-router-dom";
import { Star, Clock, Bike } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  cuisine: string[];
}

export const RestaurantCard = ({ 
  id, 
  name, 
  image, 
  rating, 
  deliveryTime, 
  deliveryFee,
  cuisine 
}: RestaurantCardProps) => {
  return (
    <Link 
      to={`/restaurant/${id}`}
      className="group block"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {deliveryFee === "Free" && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              Free Delivery
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {cuisine.map((type) => (
              <Badge key={type} variant="secondary" className="text-xs">
                {type}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary mr-1" />
              <span className="font-semibold">{rating}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <Bike className="h-4 w-4 mr-1" />
              <span>{deliveryFee}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
