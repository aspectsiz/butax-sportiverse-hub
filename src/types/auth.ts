import { UserRole } from '@/contexts/AuthContext';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  created_at?: string;
  updated_at?: string;
  full_name?: string;
  avatar_url?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
  };
  preferences?: {
    notifications?: {
      email?: boolean;
      sms?: boolean;
      push?: boolean;
    };
    marketing?: boolean;
  };
}