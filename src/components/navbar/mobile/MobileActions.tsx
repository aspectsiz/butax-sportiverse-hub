import { NavbarItem, Button } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { ProfileDropdown } from "../../auth/ProfileDropdown";

interface MobileActionsProps {
  user: any;
  items: any[];
  handleCartClick: () => void;
}

export const MobileActions = ({ user, items, handleCartClick }: MobileActionsProps) => {
  return (
    <>
      <NavbarItem>
        <Button
          isIconOnly
          variant="light"
          onClick={handleCartClick}
          className="relative mr-2 overflow-visible"
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
    </>
  );
};