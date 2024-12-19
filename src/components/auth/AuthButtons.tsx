import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

export const AuthButtons = () => {
  const { user } = useAuth();

  if (user) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Link to="/signin">
        <Button variant="ghost" size="sm" className="text-foreground hover:text-accent">
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
          <UserPlus className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </Link>
    </div>
  );
};