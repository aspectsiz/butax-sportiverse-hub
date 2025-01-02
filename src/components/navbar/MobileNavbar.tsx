import { useNavigate } from "react-router-dom";
import { NavbarContent, NavbarMenu } from "@nextui-org/react";
import { ThemeToggle } from "../ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/store/useCart";
import { MobileMenuItems } from "./mobile/MobileMenuItems";
import { MobileActions } from "./mobile/MobileActions";

interface MobileNavbarProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const MobileNavbar = ({ setIsMenuOpen }: MobileNavbarProps) => {
  const { user } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();
  
  const handleCartClick = () => {
    navigate('/checkout');
  };

  return (
    <>
      <NavbarContent className="sm:hidden" justify="end">
        <MobileActions 
          user={user} 
          items={items} 
          handleCartClick={handleCartClick} 
        />
      </NavbarContent>

      <NavbarMenu>
        <MobileMenuItems 
          setIsMenuOpen={setIsMenuOpen} 
          user={user} 
        />
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </NavbarMenu>
    </>
  );
};