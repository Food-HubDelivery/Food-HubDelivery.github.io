import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  slug: string;
}

export const CategoryCard = ({ name, image, slug }: CategoryCardProps) => {
  return (
    <Link 
      to={`/restaurants?category=${slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-square shadow-soft hover:shadow-medium transition-all duration-300 group-hover:scale-105">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold">{name}</h3>
        </div>
      </div>
    </Link>
  );
};
