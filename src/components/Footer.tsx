import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Info</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/franchise" className="text-gray-300 hover:text-white transition-colors">Franchise</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Latest Products</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Popular Items</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">GDPR</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-secondary hover:bg-gray-200">
                Subscribe <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;