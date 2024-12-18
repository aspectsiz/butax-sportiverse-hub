import { createContext, useContext } from 'react';
import { AuthError } from '@supabase/supabase-js';
import { AuthContextType, UserRole } from '@/types/auth';
import { useAuthState } from '@/hooks/useAuthState';
import { updateUserProfile, uploadUserAvatar } from '@/services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { session, user, userProfile, setUserProfile, supabase } = useAuthState();

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

  const signUp = async (email: string, password: string, role: UserRole) => {
    try {
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        return { error: signUpError };
      }

      if (!data.user) {
        return { error: new AuthError('Failed to create user', 400) };
      }

      const { error: profileError } = await supabase.from('profiles').insert([
        {
          id: data.user.id,
          role,
          email,
        },
      ]);

      if (profileError) {
        return { 
          error: new AuthError(profileError.message, 400)
        };
      }

      return { error: null };
    } catch (error) {
      return { 
        error: new AuthError('An unexpected error occurred', 500)
      };
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return { error: new Error('No user logged in') };
    
    const { error } = await updateUserProfile(user.id, updates);
    if (!error) {
      setUserProfile(prev => prev ? { ...prev, ...updates } : null);
    }
    return { error };
  };

  const uploadAvatar = async (file: File) => {
    if (!user) return { url: null, error: new Error('No user logged in') };
    
    const { url, error } = await uploadUserAvatar(user.id, file);
    if (!error && url) {
      await updateProfile({ avatar_url: url });
    }
    return { url, error };
  };

  return (
    <AuthContext.Provider value={{ 
      session, 
      user, 
      userProfile, 
      signIn, 
      signUp, 
      signOut,
      updateProfile,
      uploadAvatar
    }}>
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

export type { UserRole };