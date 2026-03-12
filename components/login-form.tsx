"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  return (
    <div className="relative rounded-3xl border border-white/20 bg-[rgba(180,170,220,0.25)] p-10 shadow-2xl backdrop-blur-xl md:p-12">
      {/* Inner glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />

      <h1 className="mb-10 text-center text-4xl font-bold italic text-white md:text-5xl">
        Login
      </h1>

      <form
        className="flex flex-col gap-6"
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          
          if (!email || !password) {
            setError("Please fill in all fields");
            return;
          }

          setIsLoading(true);
          try {
            await login(email, password);
            router.push("/");
          } catch (err) {
            setError("Login failed. Please try again.");
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {/* Email field */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-white/15 bg-[rgba(139,92,246,0.45)] px-6 py-4 text-base text-white placeholder-white/70 shadow-inner outline-none transition-all focus:border-white/30 focus:ring-2 focus:ring-[#a855f7]/40"
            aria-label="Email address"
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

        {error && (
          <p className="mt-2 text-center text-sm text-red-300">{error}</p>
        )}

        {/* Login button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 w-full cursor-pointer rounded-full border border-white/30 bg-white/80 py-4 text-lg font-semibold text-[#6d28d9] shadow-lg transition-all hover:bg-white hover:shadow-xl active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-white/80">
        {"Don't have an account? "}
        <Link
          href="/signup"
          className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-white/90"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
