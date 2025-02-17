
import { Link } from "react-router-dom";
import { NavbarContent, NavbarItem } from "@nextui-org/react";

const menuItems = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkimizda", href: "/hakkimizda" },
  { name: "Ürünlerimiz", href: "/shop" },
  { name: "Medya Merkezi", href: "/blog" },
  { name: "Referanslar", href: "/ref" },
  { name: "İletişim", href: "/contact" },
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
