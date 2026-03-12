'use client';

import { User, LogOut, LayoutDashboard, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function ProfileDropdown() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
      >
        <User className="h-4 w-4" />
        Profile
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/20 bg-gradient-to-b from-[#7c3aed]/80 to-[#5a2e7c]/80 shadow-xl backdrop-blur-md">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="text-sm font-semibold text-white">{user.fullName}</p>
            <p className="text-xs text-white/70">{user.email}</p>
          </div>

          <div className="py-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <UserCircle className="h-4 w-4" />
              Profile
            </Link>
          </div>

          <div className="border-t border-white/10 py-1">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
