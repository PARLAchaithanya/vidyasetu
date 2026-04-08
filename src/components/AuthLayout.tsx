import React from 'react';
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./Logo";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLink: string;
  onFooterClick: () => void;
  leftTitle: string;
  leftDesc: string;
  onBack: () => void;
}

export const AuthLayout = ({ 
  children, 
  title, 
  subtitle, 
  footerText, 
  footerLink, 
  onFooterClick, 
  leftTitle, 
  leftDesc, 
  onBack 
}: AuthLayoutProps) => (
  <div className="min-h-screen flex flex-col lg:flex-row bg-white">
    {/* Left Side */}
    <div className="lg:w-[45%] bg-[#1e3a8a] p-12 lg:p-24 flex flex-col justify-between text-white relative overflow-hidden">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all group z-20"
        title="Back to Home"
      >
        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <div className="space-y-12 relative z-10">
        <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="w-16 h-1 bg-[#f97316] rounded-full" />
          <h1 className="text-6xl font-bold leading-tight max-w-md">
            {leftTitle}
          </h1>
          <p className="text-blue-100/80 text-xl max-w-md leading-relaxed">
            {leftDesc}
          </p>
        </div>
      </div>
      <div className="text-blue-200/50 text-sm relative z-10">
        © 2024 VidyaSetu Education. All rights reserved.
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
    </div>

    {/* Right Side */}
    <div className="flex-1 flex items-center justify-center p-8 lg:p-24 bg-[#f8fafc]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
      >
        <div className="space-y-2 mb-10">
          <h2 className="text-3xl font-bold text-[#1e3a8a]">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>

        {children}

        <div className="mt-10 text-center text-gray-500">
          {footerText}{" "}
          <button 
            onClick={onFooterClick}
            className="text-[#1e3a8a] font-bold hover:underline"
          >
            {footerLink}
          </button>
        </div>
      </motion.div>
    </div>
  </div>
);
