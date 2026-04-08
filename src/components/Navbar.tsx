import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { User, BarChart3, LogOut } from "lucide-react";
import { Logo } from "./Logo";
import { Page } from "../types";
import { supabase } from "../lib/supabase";

interface NavbarProps {
  onNavigate: (page: Page, courseTitle?: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Navbar = ({ onNavigate, isLoggedIn, onLogout }: NavbarProps) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
    setShowProfileMenu(false);
  };

  const scrollToSection = (id: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
        <Logo className="h-20 w-auto" />
      </div>
      <div className="flex items-center gap-10">
        {isLoggedIn && (
          <button onClick={() => onNavigate('video')} className="text-gray-500 hover:text-[#1e3a8a] font-semibold text-lg transition-colors">My Learning</button>
        )}
        <button onClick={() => scrollToSection('explore-courses')} className="text-gray-500 hover:text-[#1e3a8a] font-semibold text-lg transition-colors">Courses</button>
        <button onClick={() => scrollToSection('meet-the-team')} className="text-gray-500 hover:text-[#1e3a8a] font-semibold text-lg transition-colors">About</button>
        {isLoggedIn ? (
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#1e3a8a] hover:bg-blue-100 transition-all border-2 border-transparent hover:border-[#1e3a8a]/20"
            >
              <User size={24} />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowProfileMenu(false)} 
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-2 mb-2 border-b border-gray-50">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account</p>
                    </div>
                    <button 
                      onClick={() => {
                        onNavigate('dashboard');
                        setShowProfileMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-[#1e3a8a] transition-all text-left font-semibold"
                    >
                      <BarChart3 size={18} />
                      Dashboard
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 transition-all text-left font-semibold"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <button 
            onClick={() => onNavigate('login')}
            className="bg-[#1e3a8a] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-md"
          >
            Login / Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};
