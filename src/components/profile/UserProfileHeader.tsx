import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserProfileHeader = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4 mb-8">
      <Avatar className="h-20 w-20">
        <AvatarImage src={user.user_metadata?.avatar_url} />
        <AvatarFallback>
          {user.email?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-xl font-bold text-foreground">
          {user.user_metadata?.full_name || user.email}
        </h1>
        <p className="text-muted-foreground text-left">
          Member since {new Date(user.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};