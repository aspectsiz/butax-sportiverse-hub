import { useState, useEffect } from 'react';
import { Session, useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { User } from '@supabase/supabase-js';
import { UserProfile } from '@/types/auth';
import { fetchUserProfile } from '@/services/authService';

export const useAuth = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setUser(session?.user ?? null);
    setIsAuthenticated(!!session?.user);
    if (session?.user) {
      fetchUserProfile(session.user.id, session.user).then(({ profile }) => {
        if (profile) {
          setUserProfile(profile);
        }
      });
    }
  }, [session]);

  return {
    session,
    user,
    userProfile,
    setUserProfile,
    isAuthenticated,
    supabase
  };
};