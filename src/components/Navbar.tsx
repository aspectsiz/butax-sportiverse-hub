import { Link, useLocation } from "react-router-dom";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuthState";
import { AuthButtons } from "./auth/AuthButtons";
import { UserMenu } from "./auth/UserMenu";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Franchise", href: "/franchise" },
  ];

  return (
    <NextUINavbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-md backdrop-saturate-150 z-[100]"
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
          <Link to="/" className="font-bold text-inherit flex gap-1">
            <img
              src="/lovable-uploads/butax-logo.png"
              alt="BUTAX Logo"
              className="h-8 w-auto"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={location.pathname === item.href}
          >
            <Link
              to={item.href}
              className={`text-foreground/90 hover:text-foreground ${
                location.pathname === item.href ? "font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem>
          {isAuthenticated && user ? (
            <UserMenu user={user} />
          ) : (
            <AuthButtons />
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="fixed top-[64px] left-0 right-0 bottom-0 bg-background/70 backdrop-blur-md backdrop-saturate-150 pt-6 z-[99]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.href}
              className={`w-full text-foreground/90 hover:text-foreground ${
                location.pathname === item.href ? "font-semibold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ThemeToggle />
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;