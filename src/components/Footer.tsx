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
      { to: "/hakkimizda", label: "Hakkimizda" },
      { to: "/shop", label: "Ürünlerimiz" },
      { to: "/franchise", label: "Bayilik" },
      { to: "/contact", label: "İletişim" },
    ],
    explore: [
      { to: "/shop", label: "Yeni Ürünler" },
      { to: "/shop", label: "Popüler Ürünler" },
      { to: "/shop", label: "BUTAX Özel" },
      { to: "/shop", label: "Sponsorluk" },
    ],
    legal: [
      { to: "#", label: "Gizlilik Politikası" },
      { to: "#", label: "Kullanım Şartları" },
      { to: "#", label: "Çerez Politikası" },
      { to: "#", label: "KVKK ve GDPR" },
    ],
  };

  return (
    <footer className="bg-secondary mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mobile View with Accordion */}
          <div className="md:hidden col-span-1 text-left">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="info">
                <AccordionTrigger className="text-xl font-semibold text-white">
                  Bilgi
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
                Keşfet
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
                  Yasal
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
          <div className="hidden md:block">
            <h4 className="text-xl font-semibold text-white mb-4">Bilgi</h4>
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

          <div className="hidden md:block">
            <h4 className="text-xl font-semibold text-white mb-4">Keşfet</h4>
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

          <div className="hidden md:block">
            <h4 className="text-xl font-semibold text-white mb-4">Yasal</h4>
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

          {/* Newsletter Section - Visible in both mobile and desktop */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Haber Bülteni</h4>
            <p className="text-gray-300 mb-4">
              BUTAX'in yönetmeliklerinden ve tekliflerinden haberdar olmak için abone olun.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-secondary hover:bg-gray-200">
                Abone Ol <Send className="w-4 h-4 ml-2" />
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