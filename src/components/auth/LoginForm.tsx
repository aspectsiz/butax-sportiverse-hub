import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { EmailField } from "./login/EmailField";
import { PasswordField } from "./login/PasswordField";
import { FormActions } from "./login/FormActions";
import { Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface LoginFormProps {
  userType: string;
}

export const LoginForm = ({ userType }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const { error } = await signIn.email(values.email, values.password);
      
      if (error) {
        let errorMessage = "Invalid login credentials";
        
        if (error.message.includes("Email not confirmed")) {
          errorMessage = "Please verify your email address before logging in";
        } else if (error.message.includes("Invalid login credentials")) {
          errorMessage = "The email or password you entered is incorrect";
        }
        
        toast({
          title: "Login failed",
          description: errorMessage,
          variant: "destructive",
        });
        
        console.error("Login error:", error);
      } else {
        toast({
          title: "Success",
          description: "Welcome back!",
        });
        navigate('/');
      }
    } catch (error) {
      console.error("Unexpected error during login:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <EmailField form={form} />
        <PasswordField 
          form={form}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <div className="flex justify-between items-center">
          <Link to="/signup" className="text-sm text-primary hover:underline">
            Don't have an account? Sign up
          </Link>
          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot Password?
          </Link>
        </div>

        <FormActions 
          onCancel={() => window.history.back()} 
          isLoading={isLoading}
        />

        {userType === 'user' && <SocialLoginButtons />}
      </form>
    </Form>
  );
};