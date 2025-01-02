import { Link } from "react-router-dom";
import { NavbarMenuItem } from "@nextui-org/react";
import { LogIn, UserPlus } from "lucide-react";
import { menuItems } from "../NavbarMenuItems";

interface MobileMenuItemsProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  user: any;
}

export const MobileMenuItems = ({ setIsMenuOpen, user }: MobileMenuItemsProps) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item.name}-${index}`}>
          <Link
            to={item.href}
            className="w-full text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
      {!user && (
        <>
          <NavbarMenuItem>
            <Link
              to="/signin"
              className="w-full flex items-center gap-2 text-foreground hover:text-[#006fee] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              to="/signup"
              className="w-full flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Link>
          </NavbarMenuItem>
        </>
      )}
    </>
  );
};