import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/store/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "./ThemeToggle";
import { ProfileDropdown } from "./auth/ProfileDropdown";
import { AuthButtons } from "./auth/AuthButtons";
import { ShoppingCart } from "lucide-react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as NextUILink,
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
      className="bg-background"
      maxWidth="2xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
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

      <NavbarContent justify="end">
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
              <AuthButtons />
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

      <NavbarMenu className="bg-background">
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
          <NavbarMenuItem>
            <div className="mt-4">
              <AuthButtons />
            </div>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;