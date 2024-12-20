import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { SignUpFields } from "./SignUpFields";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const { signUp } = useAuth();
  const { toast } = useToast();
  
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignUpFormData) => {
    const { error } = await signUp(values.email, values.password, "user");
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
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SignUpFields form={form} />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};