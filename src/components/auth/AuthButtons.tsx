import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export const AuthButtons = () => {
  const { user } = useAuth();

  if (user) {
    return <UserMenu />;
  }

  return (
    <div className="flex items-center gap-2">
      <LoginDialog />
      <SignUpDialog />
    </div>
  );
};