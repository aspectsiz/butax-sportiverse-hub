import { Building, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

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
    <MainLayout>
      <div className="w-full">
        {/* Hero Section */}
        <div className="hero-pattern pt-24 pb-16 px-4 sm:px-6 lg:px-8 w-full text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">BUTAX Franchise Opportunities</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Join the future of fitness with a BUTAX franchise. Be part of a growing network of successful gym owners.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-background w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose BUTAX Franchise?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Established Brand</h3>
                <p className="text-muted-foreground">
                  Join a recognized brand with a proven track record in the fitness industry.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Support System</h3>
                <p className="text-muted-foreground">
                  Comprehensive training and ongoing support for your success.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Prime Locations</h3>
                <p className="text-muted-foreground">
                  Strategic location selection assistance and territory protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-background w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Franchise Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-2" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="hero-pattern w-full py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Take the first step towards owning your own BUTAX franchise. Contact us today to learn more about this exciting opportunity.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Franchise;
