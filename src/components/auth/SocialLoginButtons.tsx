import { Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

export const SocialLoginButtons = () => {
  const { signIn } = useAuth();
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    const { error } = await signIn.google();
    if (error) {
      toast({
        title: "Error signing in with Google",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleFacebookSignIn = async () => {
    const { error } = await signIn.facebook();
    if (error) {
      toast({
        title: "Error signing in with Facebook",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          onClick={handleGoogleSignIn}
          className="w-full"
        >
          <Mail className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          onClick={handleFacebookSignIn}
          className="w-full"
        >
          <Facebook className="mr-2 h-4 w-4" />
          Sign in with Facebook
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  );
};