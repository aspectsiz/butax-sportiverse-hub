import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-heading text-xl font-bold">
              BUTAX
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/shop" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Shop
              </Link>
              <Link to="/blog" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              <Link to="/franchise" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Franchise
              </Link>
              <Link to="/about" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:text-accent">
              <ShoppingCart className="h-6 w-6" />
            </button>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/shop"
              className="hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/blog"
              className="hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/franchise"
              className="hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Franchise
            </Link>
            <Link
              to="/about"
              className="hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;