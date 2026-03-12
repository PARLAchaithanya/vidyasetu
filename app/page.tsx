import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CoursesSection } from "@/components/courses-section";
import { AuthGuard } from "@/components/auth-guard";

export default function Page() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#3d1860]">
        <Navbar />
        <HeroSection />
        <CoursesSection />
      </main>
    </AuthGuard>
  );
}
