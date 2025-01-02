import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User, SupabaseClient } from '@supabase/supabase-js';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { UserProfile } from '@/types/auth';

export type UserRole = 'user' | 'admin' | 'gym_dealer';

interface AuthError {
  message: string;
}

interface AuthResponse {
  error: AuthError | null;
}

interface SignInMethods {
  email: (email: string, password: string) => Promise<AuthResponse>;
  google: () => Promise<AuthResponse>;
  facebook: () => Promise<AuthResponse>;
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, role: UserRole) => Promise<AuthResponse>;
  signIn: SignInMethods;
  supabase: SupabaseClient<any, "public", any>;
}

export const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  userProfile: null,
  setUserProfile: () => {},
  signOut: async () => {},
  signUp: async () => ({ error: null }),
  signIn: {
    email: async () => ({ error: null }),
    google: async () => ({ error: null }),
    facebook: async () => ({ error: null }),
  },
  supabase: {} as SupabaseClient<any, "public", any>,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = useSupabaseClient();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const signOut = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUserProfile(null);
  };

  const signUp = async (email: string, password: string, role: UserRole): Promise<AuthResponse> => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role },
      },
    });
    return { error: error ? { message: error.message } : null };
  };

  const signIn = {
    email: async (email: string, password: string): Promise<AuthResponse> => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error: error ? { message: error.message } : null };
    },
    google: async (): Promise<AuthResponse> => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      return { error: error ? { message: error.message } : null };
    },
    facebook: async (): Promise<AuthResponse> => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });
      return { error: error ? { message: error.message } : null };
    },
  };

  const value = {
    session,
    user,
    userProfile,
    setUserProfile,
    signOut,
    signUp,
    signIn,
    supabase,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};