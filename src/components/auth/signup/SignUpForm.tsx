
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { SignUpFields } from "./SignUpFields";
import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const signUpSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  dateOfBirth: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const { signUp } = useAuth();
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      dateOfBirth: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (values: SignUpFormData) => {
    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      toast({
        title: "reCAPTCHA verification failed",
        description: "Please try again",
        variant: "destructive",
      });
      return;
    }

    const { error } = await signUp(values.email, values.password, "user", {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      dateOfBirth: values.dateOfBirth,
      phone: values.phone,
    });

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

  useEffect(() => {
    const loadRecaptcha = async () => {
      await recaptchaRef.current?.reset();
    };
    loadRecaptcha();
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SignUpFields form={form} />
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};
