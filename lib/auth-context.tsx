'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User as SupabaseAuthUser } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export interface OnboardingData {
  occupation?: string;
  ageGroup?: string;
  interests?: string[];
  completed?: boolean;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  isNewUser?: boolean;
  onboarding?: OnboardingData;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, fullName: string) => Promise<void>;
  logout: () => Promise<void>;
  updateOnboarding: (data: OnboardingData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function normalizeOnboarding(data: unknown): OnboardingData | undefined {
  if (!data || typeof data !== 'object') {
    return undefined;
  }

  const raw = data as Record<string, unknown>;
  return {
    occupation: typeof raw.occupation === 'string' ? raw.occupation : undefined,
    ageGroup: typeof raw.ageGroup === 'string' ? raw.ageGroup : undefined,
    interests: Array.isArray(raw.interests)
      ? raw.interests.filter((item): item is string => typeof item === 'string')
      : undefined,
    completed: typeof raw.completed === 'boolean' ? raw.completed : undefined,
  };
}

function mapAuthUser(authUser: SupabaseAuthUser): User {
  const metadata = (authUser.user_metadata ?? {}) as Record<string, unknown>;
  const onboarding = normalizeOnboarding(metadata.onboarding);
  const fullName =
    typeof metadata.full_name === 'string' && metadata.full_name.trim().length > 0
      ? metadata.full_name
      : authUser.email?.split('@')[0] || 'User';

  return {
    id: authUser.id,
    email: authUser.email || '',
    fullName,
    isNewUser: !(onboarding?.completed ?? false),
    onboarding,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const initializeSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      if (error) {
        setUser(null);
      } else {
        setUser(data.session?.user ? mapAuthUser(data.session.user) : null);
      }

      setIsLoading(false);
    };

    initializeSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) {
        return;
      }

      setUser(session?.user ? mapAuthUser(session.user) : null);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, fullName: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            onboarding: {
              completed: false,
            },
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.user && data.session) {
        setUser(mapAuthUser(data.user));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateOnboarding = async (data: OnboardingData) => {
    if (!user) {
      return;
    }

    const mergedOnboarding = {
      ...user.onboarding,
      ...data,
    };

    const { error } = await supabase.auth.updateUser({
      data: {
        onboarding: mergedOnboarding,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    setUser((prev) => {
      if (!prev) {
        return prev;
      }

      return {
        ...prev,
        onboarding: mergedOnboarding,
        isNewUser: !(mergedOnboarding.completed ?? false),
      };
    });
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, updateOnboarding }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
