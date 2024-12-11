import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Eye, EyeOff, Keyboard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { SocialLoginButtons } from "./SocialLoginButtons";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface LoginFormProps {
  userType: string;
}

export const LoginForm = ({ userType }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSuccessfulLogin = () => {
    switch (userType) {
      case 'user':
        navigate('/dashboard/user');
        break;
      case 'admin':
        navigate('/dashboard/admin');
        break;
      case 'gym':
        navigate('/dashboard/gymdealer');
        break;
      default:
        navigate('/');
    }
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const { error } = await signIn.email(values.email, values.password);
      if (error) {
        toast({
          title: "Error signing in",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Signed in successfully",
          description: "Welcome back!",
        });
        handleSuccessfulLogin();
      }
    } catch (error) {
      toast({
        title: "Error signing in",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">
                Email
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type="email"
                    className="pr-20 border-gray-300 focus:border-[#4284be] focus:ring-[#4284be]"
                    {...field}
                  />
                </FormControl>
                <div className="absolute right-3 top-2.5 flex gap-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Keyboard className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">
                Password
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="pr-20 border-gray-300 focus:border-[#4284be] focus:ring-[#4284be]"
                    {...field}
                  />
                </FormControl>
                <div className="absolute right-3 top-2.5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Keyboard className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <a href="#" className="text-sm text-[#4284be] hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full bg-[#4284be] hover:bg-[#3674aa]">
            Sign In
          </Button>
        </div>

        {userType === 'user' && <SocialLoginButtons />}
      </form>
    </Form>
  );
};