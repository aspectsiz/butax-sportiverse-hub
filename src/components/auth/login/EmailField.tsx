import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Keyboard } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface EmailFieldProps {
  form: UseFormReturn<LoginFormData>;
}

export const EmailField = ({ form }: EmailFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-auth-foreground/90 font-medium">
            Email
          </FormLabel>
          <div className="relative">
            <FormControl>
              <Input
                type="email"
                className="pr-20 border-auth-border bg-auth-background text-auth-foreground focus:border-primary focus:ring-primary"
                {...field}
              />
            </FormControl>
            <div className="absolute right-3 top-2.5 flex gap-2">
              <button
                type="button"
                className="text-auth-foreground/40 hover:text-auth-foreground/60"
              >
                <Keyboard className="h-5 w-5" />
              </button>
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};