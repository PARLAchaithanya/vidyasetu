import React, { useState, FormEvent } from 'react';
import { motion } from "motion/react";
import { User, Mail, EyeOff, Eye, RefreshCw, Loader2 } from "lucide-react";
import { AuthLayout } from "../components/AuthLayout";
import { Page } from "../types";
import { supabase } from "../lib/supabase";

interface SignUpPageProps {
  onNavigate: (page: Page, courseTitle?: string) => void;
  onLogin: () => void;
}

export const SignUpPage = ({ onNavigate, onLogin }: SignUpPageProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (authError) throw authError;

      onLogin();
      onNavigate('onboarding');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join and start learning today"
      footerText="Already have an account?"
      footerLink="Sign in"
      onFooterClick={() => onNavigate('login')}
      onBack={() => onNavigate('home')}
      leftTitle="Start your learning journey"
      leftDesc="Your learning bridge to better education. Access world-class courses and expert mentors today."
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
            {error}
          </motion.div>
        )}
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#1e3a8a]">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setError('');
              }}
              placeholder="Enter your full name"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#1e3a8a]">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="email" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="name@company.com"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#1e3a8a]">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Create a password"
              className="w-full pl-4 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#1e3a8a]">Confirm Password</label>
          <div className="relative">
            <RefreshCw className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError('');
              }}
              placeholder="Re-enter password"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all"
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-900 transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Creating account...
            </>
          ) : (
            'Create Account'
          )}
        </button>
      </form>
    </AuthLayout>
  );
};
