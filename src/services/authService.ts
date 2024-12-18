import { supabase } from '@/lib/supabase';
import { UserProfile, UserRole } from '@/types/auth';
import { AuthError, User } from '@supabase/supabase-js';

export const fetchUserProfile = async (userId: string, user: User | null) => {
  // First try to get the existing profile
  const { data: existingProfile, error: fetchError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (existingProfile) {
    return { profile: existingProfile, error: null };
  }

  // If no profile exists, create one
  if (fetchError && user?.email) {
    const { data: newProfile, error: createError } = await supabase
      .from('profiles')
      .insert([
        {
          id: userId,
          role: 'user' as UserRole,
          email: user.email,
        }
      ])
      .select()
      .single();

    return { profile: newProfile, error: createError };
  }

  return { profile: null, error: fetchError };
};

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>) => {
  const { error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId);

  return { error };
};

export const uploadUserAvatar = async (userId: string, file: File) => {
  const fileExt = file.name.split('.').pop();
  const filePath = `${userId}/avatar.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { upsert: true });

  if (uploadError) {
    return { url: null, error: uploadError };
  }

  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
  return { url: data.publicUrl, error: null };
};