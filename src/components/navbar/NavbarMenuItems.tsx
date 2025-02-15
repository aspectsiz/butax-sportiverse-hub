import { Link } from "react-router-dom";
import { NavbarContent, NavbarItem } from "@nextui-org/react";

const menuItems = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkimizda", href: "/about" },
  { name: "Ürünlerimiz", href: "/shop" },
  { name: "Medya Merkezi", href: "/blog" },
  { name: "Referanslar", href: "/ref" },
  { name: "İletişim", href: "/contact" },
  { name: "Bayilik", href: "/franchise" },
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