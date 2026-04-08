import React, { useState, FormEvent } from 'react';
import { motion } from "motion/react";
import { Mail, EyeOff, Eye, Loader2 } from "lucide-react";
import { AuthLayout } from "../components/AuthLayout";
import { Page } from "../types";
import { supabase } from "../lib/supabase";

interface LoginPageProps {
  onNavigate: (page: Page, courseTitle?: string) => void;
  onLogin: () => void;
}

export const LoginPage = ({ onNavigate, onLogin }: LoginPageProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      onLogin();
      onNavigate('home');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Please enter your details to sign in"
      footerText="Don't have an account?"
      footerLink="Sign up for free"
      onFooterClick={() => onNavigate('signup')}
      onBack={() => onNavigate('home')}
      leftTitle="Bridge your learning journey"
      leftDesc="Your learning bridge to better education. Join thousands of students mastering new skills."
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
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
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-[#1e3a8a]">Password</label>
            <button type="button" className="text-xs font-bold text-[#1e3a8a] hover:underline">Forgot password?</button>
          </div>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="••••••••"
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

        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]" />
          <label htmlFor="remember" className="text-sm text-gray-500">Remember for 30 days</label>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </button>
      </form>
    </AuthLayout>
  );
};
