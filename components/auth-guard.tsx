'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function AuthGuard({ children, redirectTo = '/login' }: AuthGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user) {
      const nextPath = pathname ? `?next=${encodeURIComponent(pathname)}` : '';
      router.replace(`${redirectTo}${nextPath}`);
    }
  }, [isLoading, user, router, redirectTo, pathname]);

  if (isLoading || !user) {
    return null;
  }

  return <>{children}</>;
}