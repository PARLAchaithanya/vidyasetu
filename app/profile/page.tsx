'use client';

import { Navbar } from '@/components/navbar';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#3d1860]">
        <Navbar />
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#3d1860]">
      <Navbar />
      
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="rounded-xl border border-white/20 bg-gradient-to-br from-[#7c3aed]/20 to-[#5a2e7c]/20 p-8 backdrop-blur-sm">
          <h1 className="mb-8 text-4xl font-bold text-white">Your Profile</h1>
          
          <div className="space-y-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <label className="block text-sm font-medium text-white/70">Full Name</label>
              <p className="mt-2 text-xl font-semibold text-white">{user.fullName}</p>
            </div>
            
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <label className="block text-sm font-medium text-white/70">Email</label>
              <p className="mt-2 text-xl font-semibold text-white">{user.email}</p>
            </div>
            
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <label className="block text-sm font-medium text-white/70">Member ID</label>
              <p className="mt-2 text-xl font-semibold text-white">{user.id}</p>
            </div>

            {user.onboarding?.completed && (
              <>
                <div className="mt-8 border-t border-white/10 pt-8">
                  <h2 className="mb-6 text-2xl font-bold text-white">Your Preferences</h2>
                </div>

                {user.onboarding?.occupation && (
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <label className="block text-sm font-medium text-white/70">Occupation</label>
                    <p className="mt-2 text-xl font-semibold text-white">{user.onboarding.occupation}</p>
                  </div>
                )}

                {user.onboarding?.ageGroup && (
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <label className="block text-sm font-medium text-white/70">Age Group</label>
                    <p className="mt-2 text-xl font-semibold text-white">{user.onboarding.ageGroup}</p>
                  </div>
                )}

                {user.onboarding?.interests && user.onboarding.interests.length > 0 && (
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <label className="block text-sm font-medium text-white/70">Interests</label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {user.onboarding.interests.map((interest) => (
                        <span
                          key={interest}
                          className="rounded-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] px-4 py-2 text-sm font-semibold text-white"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
