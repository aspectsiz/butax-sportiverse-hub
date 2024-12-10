import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
  const { user } = useAuth();

  if (user) {
    return null; // User menu is handled separately
  }

  return (
    <div className="flex items-center gap-2">
      <Link to="/signin">
        <Button variant="ghost" className="text-primary-foreground hover:text-accent">
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="ghost" className="text-primary-foreground hover:text-accent">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};