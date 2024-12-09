import { createContext, useContext, useEffect, useState } from 'react';
import { useSupabaseClient, useSession, Session } from '@supabase/auth-helpers-react';
import { AuthError, User } from '@supabase/supabase-js';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  signIn: {
    email: (email: string, password: string) => Promise<{ error: AuthError | null }>;
    google: () => Promise<{ error: AuthError | null }>;
    facebook: () => Promise<{ error: AuthError | null }>;
    twitter: () => Promise<{ error: AuthError | null }>;
  };
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<{ error: AuthError | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(session?.user ?? null);
  }, [session]);

  const signIn = {
    email: async (email: string, password: string) => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    },
    google: async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      return { error };
    },
    facebook: async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });
      return { error };
    },
    twitter: async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
      });
      return { error };
    },
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  return (
    <AuthContext.Provider value={{ session, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};