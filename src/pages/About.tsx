import { Users, BrainCircuit, Lightbulb } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="w-full">
        {/* Hero Section */}
        <div className="hero-pattern pt-24 pb-16 px-4 sm:px-6 lg:px-8 w-full text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About BUTAX</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Empowering fitness enthusiasts and gym owners with innovative solutions for a healthier tomorrow.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-background w-full py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background p-8 text-right">
                <div className="flex items-center justify-end mb-4">
                  <h2 className="text-2xl uppercase">
                    <span className="font-b1">The idea </span>
                    <span className="font-b2">of </span><br />
                    <span className="font-b3">Outdoor Fitness</span>
                  </h2>
                  <Lightbulb className="w-12 h-12 text-primary ml-2" strokeWidth={0.75} />
                </div>
                <p className="text-foreground">
                  BUTAX is an innovative brand that produces indoor and outdoor fitness
                  equipment, combining sports and technology. Our founders have been
                  involved in bodybuilding for many years and have observed the lack of
                  accurate and sufficient resources on sports in Turkey. This observation
                  marked the starting point of BUTAX's founding journey. In 2024, with
                  the launch of the research project titled 'Supporting Urban Development
                  by Increasing the Usage Potential of Sports and Recreation
                  Facilities,' BUTAX's mission has become even more defined.
                </p>
              </div>
              <div className="bg-background rounded-lg overflow-hidden">
                <img
                  src="https://www.providesupport.com/blog/wp-content/uploads/2017/09/4-Key-Personality-Traits-for-A-Perfect-Customer-Service-Representative.png"
                  alt="Professional Dumbbell Set"
                  className="w-full"
                />
              </div>
              <div className="bg-background rounded-lg overflow-hidden">
                <img
                  src="https://www.providesupport.com/blog/wp-content/uploads/2017/09/4-Key-Personality-Traits-for-A-Perfect-Customer-Service-Representative.png"
                  alt="Professional Dumbbell Set"
                  className="w-full"
                />
              </div>
              <div className="bg-background p-8 text-left">
                <div className="flex items-center mb-4">
                  <BrainCircuit className="w-12 h-12 text-primary mr-2" strokeWidth={0.75} />
                  <h2 className="text-2xl uppercase">
                    <span className="font-b1">From Science </span>
                    <span className="font-b2">to Inspiration </span><br />
                    <span className="font-b3">Outdoor Fitness</span>
                  </h2>
                </div>
                <p className="text-foreground">
                  Within the scope of this project, it has been aimed to
                  systematically research and develop the usage potentials of sports
                  and equipment facilities in the Konak-Alsancak region of İzmir. The
                  project examined the sustainability and suitability of these
                  facilities and equipment against vandalism, and developed
                  sustainability recommendations that include both physical and
                  managerial measures. As a TÜBİTAK project, it enabled BUTAX to take
                  its first step into the academic and business world. Our founders
                  adopted the knowledge and experience gained from this initiative as a
                  fundamental building block for BUTAX's future. With its innovation
                  vision, BUTAX aims to improve user experience by integrating sports
                  equipment with technology and to create a more efficient fitness
                  process. BUTAX strives to offer innovative solutions to make sports
                  more accessible, enjoyable, and efficient for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="hero-pattern py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Our Team</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Meet the passionate individuals behind BUTAX who are dedicated to transforming the fitness industry.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="bg-background/95 p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
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
    </MainLayout>
  );
};

export default About;
