import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLinks } from "./navigation/NavLinks";
import { AuthButtons } from "./auth/AuthButtons";

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
              <NavLinks />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <AuthButtons />
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
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;