import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-warm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold animate-fade-in">Your Cart</h1>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12">
          {items.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-20">
              <div className="h-32 w-32 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Add some delicious food to get started!
              </p>
              <Link to="/restaurants">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Browse Restaurants
                </Button>
              </Link>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {items.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-card rounded-xl p-4 shadow-soft mb-4 flex items-center gap-4"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.restaurantName}</p>
                        <p className="text-primary font-bold mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-card rounded-xl p-6 shadow-soft sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span className="font-semibold">$2.99</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>${(getTotalPrice() + 2.99).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 mb-3"
                      size="lg"
                      onClick={() => {
                        toast.success("Order placed successfully! (Demo only)");
                        clearCart();
                      }}
                    >
                      Checkout
                    </Button>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => clearCart()}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
