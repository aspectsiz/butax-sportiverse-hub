import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Footer = () => {
  const footerLinks = {
    info: [
      { to: "/about", label: "About Us" },
      { to: "/shop", label: "Products" },
      { to: "/franchise", label: "Franchise" },
      { to: "/contact", label: "Contact" },
    ],
    explore: [
      { to: "/shop", label: "Latest Products" },
      { to: "/shop", label: "Popular Items" },
      { to: "/shop", label: "New Arrivals" },
      { to: "/shop", label: "Special Offers" },
    ],
    legal: [
      { to: "#", label: "Privacy Policy" },
      { to: "#", label: "Terms of Service" },
      { to: "#", label: "Cookie Policy" },
      { to: "#", label: "GDPR" },
    ],
  };

  return (
    <footer className="bg-secondary mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Mobile View with Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="info">
              <AccordionTrigger className="text-xl font-semibold text-white">
                Info
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {footerLinks.info.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="explore">
              <AccordionTrigger className="text-xl font-semibold text-white">
                Explore
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legal">
              <AccordionTrigger className="text-xl font-semibold text-white">
                Legal
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Info</h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
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