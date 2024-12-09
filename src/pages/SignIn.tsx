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
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Keyboard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
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
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/539d646d-fc68-4de8-8bf1-581f6aaf3527.png"
              alt="BUTAX Logo"
              className="h-12"
            />
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-gray-900">BUTAX</h1>
              <p className="text-sm text-gray-500">Identity Verification System</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container max-w-md mx-auto px-4 py-8">
        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="gym">Gym Dealer</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>

          <TabsContent value="user">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input type="email" {...field} className="pr-10" />
                          </FormControl>
                          <button
                            type="button"
                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-500"
                          >
                            <Keyboard className="h-5 w-5" />
                          </button>
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
                        <FormLabel className="text-gray-700">Password</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showPassword ? "text" : "password"}
                              {...field}
                              className="pr-20"
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

                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
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
                    <Button type="submit" className="w-full bg-[#4284be]">
                      Sign In
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </TabsContent>

          <TabsContent value="gym">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-center text-gray-500">
                Gym dealer login form will be implemented here
              </p>
            </div>
          </TabsContent>

          <TabsContent value="admin">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-center text-gray-500">
                Admin login form will be implemented here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 BUTAX - All rights reserved
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Privacy & Security
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;