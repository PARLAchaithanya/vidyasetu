'use client';

import { OnboardingForm } from '@/components/onboarding-form';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OnboardingPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect if user not logged in or already completed onboarding
    if (!isLoading) {
      if (!user) {
        router.push('/signup');
      } else if (user.onboarding?.completed) {
        router.push('/');
      }
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return null;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#3d1860] px-6 py-12">
      <div className="w-full max-w-2xl">
        <OnboardingForm />
      </div>
    </main>
  );
}
