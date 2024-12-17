import { Info, Users, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About BUTAX</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Empowering fitness enthusiasts and gym owners with innovative solutions for a healthier tomorrow.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-foreground">
                To revolutionize the fitness industry by providing cutting-edge technology and solutions that make gym management seamless and workout experiences exceptional.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-foreground">
                To become the global leader in fitness technology solutions, creating a more connected and healthier world.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the passionate individuals behind BUTAX who are dedicated to transforming the fitness industry.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="bg-background p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Team Member {member}</h3>
                  <p className="text-muted-foreground">Position</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;