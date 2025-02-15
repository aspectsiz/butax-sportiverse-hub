import { Link } from "react-router-dom";
import { NavbarItem, Button } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { ProfileDropdown } from "../../auth/ProfileDropdown";

interface DesktopActionsProps {
  user: any;
  items: any[];
  handleCartClick: () => void;
}

export const DesktopActions = ({ user, items, handleCartClick }: DesktopActionsProps) => {
  return (
    <>
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
              className="relative overflow-visible"
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
            <Link 
              to="/signin" 
              className="text-foreground hover:text-[#006fee] transition-colors"
            >
              Sign In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              to="/signup"
              className="text-foreground hover:text-accent transition-colors"
            >
              Sign Up
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              onClick={handleCartClick}
              className="relative overflow-visible"
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
    </>
  );
};