import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Facebook, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["user", "gym_dealer", "admin"] as const),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, signIn } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "user",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const { error } = await signUp(values.email, values.password, values.role as UserRole);
    if (error) {
      toast({
        title: "Error signing up",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Account created successfully",
        description: "Please check your email to verify your account.",
      });
      navigate('/signin');
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await signIn.google();
    if (error) {
      toast({
        title: "Error signing up with Google",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleFacebookSignIn = async () => {
    const { error } = await signIn.facebook();
    if (error) {
      toast({
        title: "Error signing up with Facebook",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">BUTAX</h1>
            <p className="text-gray-600">Create your account</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button
                variant="outline"
                onClick={handleGoogleSignIn}
                className="w-full"
              >
                <Mail className="mr-2 h-4 w-4" />
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                onClick={handleFacebookSignIn}
                className="w-full"
              >
                <Facebook className="mr-2 h-4 w-4" />
                Sign up with Facebook
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

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-500"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your account type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="gym_dealer">Gym Dealer</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;