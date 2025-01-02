import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { NavbarBranding } from "./navbar/NavbarBranding";
import { NavbarMenuItems } from "./navbar/NavbarMenuItems";
import { NavbarActions } from "./navbar/NavbarActions";
import { MobileNavbar } from "./navbar/MobileNavbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <NavbarBranding />
      <NavbarMenuItems />
      <NavbarActions />
      <MobileNavbar setIsMenuOpen={setIsMenuOpen} />
    </NextUINavbar>
  );
};

export default Navbar;