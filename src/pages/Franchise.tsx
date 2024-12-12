import { Building, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Franchise = () => {
  const benefits = [
    "Proven Business Model",
    "Comprehensive Training",
    "Marketing Support",
    "Technology Solutions",
    "Ongoing Assistance",
    "Brand Recognition"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">BUTAX Franchise Opportunities</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Join the future of fitness with a BUTAX franchise. Be part of a growing network of successful gym owners.
            </p>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Request Franchise Information
              </Button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BUTAX Franchise?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Building className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Established Brand</h3>
              <p className="text-gray-600">
                Join a recognized brand with a proven track record in the fitness industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Support System</h3>
              <p className="text-gray-600">
                Comprehensive training and ongoing support for your success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prime Locations</h3>
              <p className="text-gray-600">
                Strategic location selection assistance and territory protection.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Franchise Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-accent mr-2" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Take the first step towards owning your own BUTAX franchise. Contact us today to learn more about this exciting opportunity.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Franchise;