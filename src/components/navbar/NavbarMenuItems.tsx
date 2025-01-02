import { Link } from "react-router-dom";
import { NavbarContent, NavbarItem } from "@nextui-org/react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Franchise", href: "/franchise" },
];

export const NavbarMenuItems = () => {
  return (
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
  );
};

export { menuItems };