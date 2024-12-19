import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
  const { user } = useAuth();

  if (user) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Link to="/signin">
        <Button variant="ghost" className="text-foreground hover:text-accent">
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button className="bg-accent hover:bg-accent/90 text-white">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};