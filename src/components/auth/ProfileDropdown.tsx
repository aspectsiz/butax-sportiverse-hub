import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  User,
  Settings,
  ShoppingBag,
  Heart,
  CreditCard,
  MapPin,
  Bell,
  HelpCircle,
  Users,
  LogOut,
  LayoutDashboard,
  Package,
  Star,
  LineChart,
  Store,
  Calendar,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ProfileDropdown = () => {
  const { user, userProfile, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Remove this early return to ensure the component renders when user exists
  if (!userProfile) return null;

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "An error occurred while signing out.",
        variant: "destructive",
      });
    }
    setIsOpen(false);
  };

  const userMenuItems = {
    user: [
      { icon: LayoutDashboard, label: "Dashboard", to: "/user/dashboard" },
      { icon: User, label: "Profile", to: "/user/profile" },
      { icon: Settings, label: "Settings", to: "/user/settings" },
      { icon: ShoppingBag, label: "Order History", to: "/user/orders" },
      { icon: Heart, label: "Wishlist", to: "/user/wishlist" },
      { icon: Package, label: "Current Orders", to: "/user/current-orders" },
      { icon: CreditCard, label: "Payment Methods", to: "/user/payment" },
      { icon: MapPin, label: "Address Book", to: "/user/addresses" },
      { icon: Bell, label: "Notifications", to: "/user/notifications" },
      { icon: HelpCircle, label: "Help & Support", to: "/help" },
      { icon: Users, label: "Refer a Friend", to: "/user/refer" },
    ],
    gym_dealer: [
      { icon: LayoutDashboard, label: "Dashboard", to: "/dealer/dashboard" },
      { icon: User, label: "Profile", to: "/dealer/profile" },
      { icon: Settings, label: "Settings", to: "/dealer/settings" },
      { icon: ShoppingBag, label: "Manage Orders", to: "/dealer/orders" },
      { icon: Calendar, label: "Bookings", to: "/dealer/bookings" },
      { icon: Store, label: "Product Management", to: "/dealer/products" },
      { icon: CreditCard, label: "Earnings Overview", to: "/dealer/earnings" },
      { icon: Star, label: "Customer Reviews", to: "/dealer/reviews" },
      { icon: Package, label: "Subscription Plan", to: "/dealer/subscription" },
      { icon: LineChart, label: "Analytics", to: "/dealer/analytics" },
      { icon: HelpCircle, label: "Help & Support", to: "/dealer/help" },
      { icon: Bell, label: "Notifications", to: "/dealer/notifications" },
    ],
    admin: [
      { icon: LayoutDashboard, label: "Dashboard", to: "/admin/dashboard" },
      { icon: User, label: "Profile", to: "/admin/profile" },
      { icon: Settings, label: "Settings", to: "/admin/settings" },
    ],
  };

  const menuItems = userMenuItems[userProfile.role as keyof typeof userMenuItems] || [];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.user_metadata?.avatar_url} />
          <AvatarFallback>
            {user?.email?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="hidden md:inline-block text-sm font-medium">
          {user?.email}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link to={item.to} className="flex items-center gap-2 cursor-pointer">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};