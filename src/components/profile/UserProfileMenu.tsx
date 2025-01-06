import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ShoppingBag,
  Star,
  MessageSquare,
  CreditCard,
  Gift,
  Tag,
  User,
  Award,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: ShoppingBag, label: "All Orders", path: "/user/orders" },
  { icon: Star, label: "Reviews", path: "/user/reviews", component: "UserReviews" },
  { icon: MessageSquare, label: "Seller Messages", path: "/user/messages" },
  { icon: CreditCard, label: "Credits", path: "/user/credits" },
  { icon: Gift, label: "Lucky Draws", path: "/user/lucky-draws" },
  { icon: Tag, label: "Discount Coupons", path: "/user/coupons" },
  { icon: User, label: "User Information", path: "/user/information" },
  { icon: Award, label: "Elite Membership", path: "/user/membership" },
  { icon: HelpCircle, label: "Assistant", path: "/user/help" },
];

export const UserProfileMenu = () => {
  const location = useLocation();
  const { signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "An error occurred while signing out.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="space-y-2" role="navigation" aria-label="User profile menu">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              location.pathname === item.path
                ? "bg-accent text-accent-foreground"
                : "bg-card text-card-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <Button
        variant="outline"
        className="w-full mt-4 text-destructive hover:text-destructive"
        onClick={handleSignOut}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </nav>
  );
};