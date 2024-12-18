import { createContext, useContext, useEffect, useState } from 'react';
import { useSupabaseClient, useSession, Session } from '@supabase/auth-helpers-react';
import { AuthError, User } from '@supabase/supabase-js';

export type UserRole = 'user' | 'gym_dealer' | 'admin';

interface UserProfile {
  id: string;
  role: UserRole;
  name?: string;
  phone?: string;
  bio?: string;
  avatar_url?: string;
}

interface AuthContextType {
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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    setUser(session?.user ?? null);
    if (session?.user) {
      fetchUserProfile(session.user.id);
    }
  }, [session]);

  const fetchUserProfile = async (userId: string) => {
    // First try to get the existing profile
    const { data: existingProfile, error: fetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (existingProfile) {
      setUserProfile(existingProfile);
      return;
    }

    // If no profile exists, create one
    if (fetchError && user?.email) {
      const { data: newProfile, error: createError } = await supabase
        .from('profiles')
        .insert([
          {
            id: userId,
            role: 'user',
            email: user.email,
          }
        ])
        .select()
        .single();

      if (!createError && newProfile) {
        setUserProfile(newProfile);
      }
    }
  };

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
        // Convert PostgrestError to AuthError
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

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (!error) {
      setUserProfile(prev => prev ? { ...prev, ...updates } : null);
    }

    return { error };
  };

  const uploadAvatar = async (file: File) => {
    if (!user) return { url: null, error: new Error('No user logged in') };

    const fileExt = file.name.split('.').pop();
    const filePath = `${user.id}/avatar.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      return { url: null, error: uploadError };
    }

    const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
    
    await updateProfile({ avatar_url: data.publicUrl });

    return { url: data.publicUrl, error: null };
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
