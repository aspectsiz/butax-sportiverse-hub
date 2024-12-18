import { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { UserProfile } from '@/types/auth';

export const fetchUserProfile = async (userId: string, user: User) => {
  try {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code === 'PGRST116') {
      // Profile doesn't exist, create it
      const newProfile = {
        id: userId,
        email: user.email,
        role: 'user' as const,
      };

      const { data: createdProfile, error: createError } = await supabase
        .from('profiles')
        .insert([newProfile])
        .select()
        .single();

      if (createError) {
        throw createError;
      }

      return { profile: createdProfile as UserProfile, error: null };
    }

    if (error) {
      throw error;
    }

    return { profile: profile as UserProfile, error: null };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return { profile: null, error };
  }
};