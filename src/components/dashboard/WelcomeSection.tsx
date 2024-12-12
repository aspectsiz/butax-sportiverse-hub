import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export const WelcomeSection = () => {
  const { user } = useAuth();
  
  return (
    <div className="bg-primary rounded-lg p-8 mb-8 relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back 👋
          <br />
          {user?.email?.split('@')[0] || 'Admin'}
        </h1>
        <p className="text-gray-200 mb-4 max-w-lg">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
        </p>
        <Button variant="secondary" className="bg-[#00A76F] hover:bg-[#008F5D] text-white border-none">
          Go now
        </Button>
      </div>
      <div className="absolute right-0 bottom-0 w-72 h-72">
        <img 
          src="/placeholder.svg" 
          alt="Welcome illustration" 
          className="object-contain"
        />
      </div>
    </div>
  );
};