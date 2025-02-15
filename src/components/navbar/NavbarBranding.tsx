import { Link } from "react-router-dom";
import { NavbarBrand, NavbarContent } from "@nextui-org/react";

export const NavbarBranding = () => {
  return (
    <NavbarContent className="pr-3" justify="center">
      <NavbarBrand>
        <Link to="/" className="font-heading text-3xl font-bold text-foreground">
          BUTAX
        </Link>
      </NavbarBrand>
    </NavbarContent>
  );
};