import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { UserMenu } from "./UserMenu";
import { LoginDialog } from "./LoginDialog";
import { SignUpDialog } from "./SignUpDialog";

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