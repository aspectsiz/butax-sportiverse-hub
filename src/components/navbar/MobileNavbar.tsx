import { Link } from "react-router-dom";
import { NavbarContent, NavbarItem, NavbarMenuItem, Button } from "@nextui-org/react";
import { ShoppingCart, LogIn, UserPlus } from "lucide-react";
import { ProfileDropdown } from "../auth/ProfileDropdown";
import { ThemeToggle } from "../ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/store/useCart";
import { menuItems } from "./NavbarMenuItems";

interface MobileNavbarProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const MobileNavbar = ({ setIsMenuOpen }: MobileNavbarProps) => {
  const { user } = useAuth();
  const { items } = useCart();
  const handleCartClick = () => {
    navigate('/checkout');
  };

  return (
    <>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onClick={handleCartClick}
            className="relative mr-2"
          >
            <ShoppingCart className="h-6 w-6" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </Button>
        </NavbarItem>
        {user && (
          <NavbarItem>
            <ProfileDropdown />
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu className="fixed top-[var(--navbar-height)] left-0 right-0 bottom-0 bg-background/70 backdrop-blur-md backdrop-saturate-150 pt-6">
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
        <NavbarMenuItem>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </>
  );
};