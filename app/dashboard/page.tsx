import { Navbar } from '@/components/navbar';
import { AuthGuard } from '@/components/auth-guard';

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#3d1860]">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-xl border border-white/20 bg-gradient-to-br from-[#7c3aed]/20 to-[#5a2e7c]/20 p-8 backdrop-blur-sm">
            <h1 className="mb-4 text-4xl font-bold text-white">Dashboard</h1>
            <p className="text-white/80">
              Welcome to your learning dashboard. Track your progress and manage your courses here.
            </p>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
