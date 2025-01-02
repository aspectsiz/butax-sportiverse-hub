import { useNavigate } from "react-router-dom";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { ThemeToggle } from "../ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/store/useCart";
import { DesktopActions } from "./desktop/DesktopActions";

export const NavbarActions = () => {
  const { user } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();
  
  const handleCartClick = () => {
    navigate('/checkout');
  };

  return (
    <NavbarContent justify="end" className="hidden sm:flex">
      <NavbarItem>
        <ThemeToggle />
      </NavbarItem>
      
      <DesktopActions 
        user={user} 
        items={items} 
        handleCartClick={handleCartClick} 
      />
    </NavbarContent>
  );
};