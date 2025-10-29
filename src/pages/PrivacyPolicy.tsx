import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-gradient-warm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold animate-fade-in">Privacy Policy</h1>
          </div>
        </div>

        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including your name, email address, 
              delivery address, phone number, and payment information when you place an order through our platform.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to process your orders, communicate with you about your orders, 
              provide customer support, and improve our services. We may also use your information to send you 
              promotional materials if you have opted in to receive them.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
            <p className="mb-4">
              We share your information with restaurants to fulfill your orders and with delivery partners to 
              deliver your food. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. You can also object to 
              or restrict certain processing of your data. To exercise these rights, please contact us.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@foodhub.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
