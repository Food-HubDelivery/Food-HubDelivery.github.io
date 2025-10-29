import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-warm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold animate-fade-in">Frequently Asked Questions</h1>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                How do I place an order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Browse restaurants, select items you want, add them to your cart, and proceed to checkout. 
                Enter your delivery address and payment information to complete your order.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept credit cards, debit cards, and various digital wallet options including Apple Pay 
                and Google Pay.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                How long does delivery take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Delivery times vary by restaurant and location, typically ranging from 20-45 minutes. 
                You'll see an estimated delivery time when you place your order.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Can I track my order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Once your order is confirmed, you can track its status in real-time from preparation 
                to delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                What if there's an issue with my order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Contact our customer support immediately through the app or website. We'll work with you 
                to resolve any issues and ensure your satisfaction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                Is there a minimum order amount?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Minimum order amounts vary by restaurant. You'll see the minimum order requirement on each 
                restaurant's page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold">
                Do you offer contactless delivery?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer contactless delivery options. You can add delivery instructions during checkout 
                to specify your preference.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold">
                Can I schedule orders in advance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, many restaurants allow you to schedule orders for a specific date and time in the future.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
