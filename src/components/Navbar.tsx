import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/store/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "./ThemeToggle";
import { ProfileDropdown } from "./auth/ProfileDropdown";
import { ShoppingCart, LogIn, UserPlus } from "lucide-react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { items } = useCart();
  const { user } = useAuth();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Franchise", href: "/franchise" },
  ];

  const handleCartClick = () => {
    navigate('/checkout');
  };

  return (
    <NextUINavbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-md backdrop-saturate-150 z-50"
      maxWidth="2xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
          className="text-foreground"
        />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Link to="/" className="font-heading text-xl font-bold text-foreground">
            BUTAX
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link 
              to={item.href}
              className="text-foreground hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        
        {user ? (
          <>
            <NavbarItem>
              <ProfileDropdown />
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                variant="light"
                onClick={handleCartClick}
                className="relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Link 
                to="/signin" 
                className="text-foreground hover:text-[#006fee] transition-colors"
              >
                Sign In
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link 
                to="/signup"
                className="text-foreground hover:text-accent transition-colors"
              >
                Sign Up
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                variant="light"
                onClick={handleCartClick}
                className="relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onClick={handleCartClick}
            className="relative mr-2"
          >
            <ShoppingCart className="h-6 w-6" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </Button>
        </NavbarItem>
        {user && (
          <NavbarItem>
            <ProfileDropdown />
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu className="fixed top-[var(--navbar-height)] left-0 right-0 bottom-0 bg-background/70 backdrop-blur-md backdrop-saturate-150 pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.href}
              className="w-full text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {!user && (
          <>
            <NavbarMenuItem>
              <Link
                to="/signin"
                className="w-full flex items-center gap-2 text-foreground hover:text-[#006fee] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                to="/signup"
                className="w-full flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Link>
            </NavbarMenuItem>
          </>
        )}
        <NavbarMenuItem>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;