'use client';

import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { ProfileDropdown } from './profile-dropdown';

export function Navbar() {
  const { user, isLoading } = useAuth();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#5a2e7c] via-[#7c3aed] to-[#6d1b84] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo and brand */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#ec4899] to-[#f472b6]">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">VidyaSetu</span>
        </Link>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Home
          </Link>

          {!isLoading && !user ? (
            <>
              <Link
                href="/login"
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
              >
                Sign Up
              </Link>
            </>
          ) : !isLoading ? (
            <ProfileDropdown />
          ) : null}
        </div>
      </div>
    </nav>
  );
}
