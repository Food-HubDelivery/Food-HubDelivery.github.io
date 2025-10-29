import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-warm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold animate-fade-in">Terms of Service</h1>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using FoodHub, you accept and agree to be bound by the terms and provisions 
              of this agreement. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Use of Service</h2>
            <p className="mb-4">
              FoodHub provides a platform for ordering food from restaurants for delivery or pickup. 
              You must be at least 18 years old to use our service. You are responsible for maintaining 
              the confidentiality of your account information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Orders and Payments</h2>
            <p className="mb-4">
              All orders are subject to acceptance by the restaurant. Prices are subject to change without notice. 
              Payment must be made at the time of order. We accept various payment methods including credit cards 
              and digital wallets.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Delivery</h2>
            <p className="mb-4">
              Delivery times are estimates and may vary. We are not responsible for delays caused by factors 
              outside our control. You must be available to receive your order at the specified delivery address.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cancellations and Refunds</h2>
            <p className="mb-4">
              Orders can be cancelled within 5 minutes of placement. Refunds will be processed according to our 
              refund policy. We reserve the right to refuse or cancel orders at our discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              FoodHub is not liable for any damages arising from the use of our service, including but not limited 
              to food quality issues, delivery delays, or errors in order fulfillment.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at legal@foodhub.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
