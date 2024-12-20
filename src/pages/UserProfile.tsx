import { useAuth } from "@/contexts/AuthContext";
import { UserProfileMenu } from "@/components/profile/UserProfileMenu";
import { UserProfileHeader } from "@/components/profile/UserProfileHeader";

const UserProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <UserProfileHeader />
        <UserProfileMenu />
      </div>
    </div>
  );
};

export default UserProfile;