"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const router = useRouter();

  return (
    <div className="relative rounded-3xl border border-white/20 bg-[rgba(180,170,220,0.25)] p-8 shadow-2xl backdrop-blur-xl md:p-10">
      {/* Inner glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />

      <h1 className="mb-8 text-center text-3xl font-bold italic text-white md:text-4xl">
        Create Your Account
      </h1>

      <form
        className="flex flex-col gap-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          
          if (!fullName || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
          }

          if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
          }

          if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
          }

          setIsLoading(true);
          try {
            await signup(email, password, fullName);
            router.push("/onboarding");
          } catch (err) {
            setError("Signup failed. Please try again.");
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {/* Full Name field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-full border border-white/15 bg-[rgba(139,92,246,0.45)] px-6 py-4 text-base text-white placeholder-white/70 shadow-inner outline-none transition-all focus:border-white/30 focus:ring-2 focus:ring-[#a855f7]/40"
            aria-label="Full Name"
          />
        </div>

        {/* Email field */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-white/15 bg-[rgba(139,92,246,0.45)] px-6 py-4 text-base text-white placeholder-white/70 shadow-inner outline-none transition-all focus:border-white/30 focus:ring-2 focus:ring-[#a855f7]/40"
            aria-label="Email Address"
          />
        </div>

        {/* Password field */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border border-white/15 bg-[rgba(139,92,246,0.45)] px-6 py-4 pr-14 text-base text-white placeholder-white/70 shadow-inner outline-none transition-all focus:border-white/30 focus:ring-2 focus:ring-[#a855f7]/40"
            aria-label="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-5 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Confirm Password field */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-full border border-white/15 bg-[rgba(139,92,246,0.45)] px-6 py-4 pr-14 text-base text-white placeholder-white/70 shadow-inner outline-none transition-all focus:border-white/30 focus:ring-2 focus:ring-[#a855f7]/40"
            aria-label="Confirm Password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 right-5 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {error && (
          <p className="mt-2 text-center text-sm text-red-300">{error}</p>
        )}

        {/* Create Account button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 w-full cursor-pointer rounded-full border border-white/30 bg-white/80 py-4 text-lg font-semibold text-[#6d28d9] shadow-lg transition-all hover:bg-white hover:shadow-xl active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-white/80">
        {"Already have an account? "}
        <Link
          href="/login"
          className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-white/90"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
