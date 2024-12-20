import React from 'react';
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onCancel: () => void;
}

export const FormActions = ({ onCancel }: FormActionsProps) => {
  return (
    <div className="flex gap-4">
      <Button
        type="button"
        variant="outline"
        className="w-full border-auth-border bg-auth-background text-auth-foreground hover:bg-auth-muted"
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        Sign In
      </Button>
    </div>
  );
};