import { AuthError, User } from '@supabase/supabase-js';
import { Session } from '@supabase/auth-helpers-react';

export type UserRole = 'user' | 'gym_dealer' | 'admin';

export interface UserProfile {
  id: string;
  role: UserRole;
  name?: string;
  phone?: string;
  bio?: string;
  avatar_url?: string;
}

export interface AuthContextType {
  session: Session | null;
  user: User | null;
  userProfile: UserProfile | null;
  signIn: {
    email: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    google: () => Promise<{ error: AuthError | null }>;
    facebook: () => Promise<{ error: AuthError | null }>;
    twitter: () => Promise<{ error: AuthError | null }>;
  };
  signUp: (email: string, password: string, role: UserRole) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<{ error: AuthError | null }>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error: Error | null }>;
  uploadAvatar: (file: File) => Promise<{ url: string | null; error: Error | null }>;
}