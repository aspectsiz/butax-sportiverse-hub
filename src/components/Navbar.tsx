import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { NavLinks } from "./navigation/NavLinks";
import { AuthButtons } from "./auth/AuthButtons";
import { useCart } from "@/store/useCart";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { items } = useCart();

  const handleCartClick = () => {
    navigate('/checkout');
  };

  return (
    <nav className="bg-background border-b fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-heading text-xl font-bold text-foreground">
              BUTAX
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AuthButtons />
            <button 
              onClick={handleCartClick}
              className="hover:text-accent relative text-foreground"
            >
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </button>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent focus:outline-none"
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
        <div className="md:hidden bg-background border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;