import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useAuth } from "@/hooks/useAuthState";
import { NavLinks } from "./navigation/NavLinks";
import { UserMenu } from "./auth/UserMenu";
import { AuthButtons } from "./auth/AuthButtons";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Franchise", href: "/franchise" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed w-full"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/butax-logo.png"
              alt="Butax Logo"
              className="h-8"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/butax-logo.png"
              alt="Butax Logo"
              className="h-8"
            />
          </Link>
        </NavbarBrand>
        <NavLinks />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {isAuthenticated && user ? (
            <UserMenu />
          ) : (
            <AuthButtons />
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.href}
              className={`w-full ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;