import { GlassmorphismBackground } from "@/components/glassmorphism-background";
import { SignupForm } from "@/components/signup-form";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Left: Gradient background with abstract shapes */}
      <section className="relative hidden flex-1 lg:block" aria-hidden="true">
        <div className="sticky top-0 h-screen">
          <GlassmorphismBackground />
        </div>
      </section>

      {/* Right: Glass signup card */}
      <section className="relative flex min-h-screen flex-1 items-center justify-center">
        {/* Background gradient for the right side */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b4aae0]/40 via-[#c4b5f0]/30 to-[#a594d8]/40 backdrop-blur-sm" />

        {/* Mobile-only: Subtle gradient background */}
        <div className="absolute inset-0 bg-[#1a1035] lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/30 via-[#a855f7]/20 to-[#c026d3]/30 lg:hidden" />

        <div className="relative z-10 w-full max-w-md px-6 py-8">
          <SignupForm />
        </div>
      </section>
    </main>
  );
}
