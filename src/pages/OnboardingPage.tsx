import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Page } from "../types";

interface OnboardingPageProps {
  onComplete: () => void;
}

export const OnboardingPage = ({ onComplete }: OnboardingPageProps) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    occupation: '',
    ageGroup: '',
    interests: [] as string[]
  });

  const steps = [
    {
      id: 1,
      title: "Tell us about yourself",
      question: "What is your current occupation?",
      options: ["Student", "Teacher", "Trainer", "Others"],
      type: "single"
    },
    {
      id: 2,
      title: "Tell us about yourself",
      question: "Which age group do you belong to?",
      options: ["13-17", "18-25", "25 above"],
      type: "single"
    },
    {
      id: 3,
      title: "Tell us about yourself",
      question: "What are your interests?",
      subtitle: "Select all that apply",
      options: ["Data Structure", "Python", "DBMS"],
      type: "multiple"
    }
  ];

  const currentStepData = steps[step - 1];

  const handleSelect = (option: string) => {
    if (currentStepData.type === "single") {
      setSelections(prev => ({
        ...prev,
        [step === 1 ? 'occupation' : 'ageGroup']: option
      }));
    } else {
      setSelections(prev => {
        const interests = prev.interests.includes(option)
          ? prev.interests.filter(i => i !== option)
          : [...prev.interests, option];
        return { ...prev, interests };
      });
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isNextDisabled = () => {
    if (step === 1) return !selections.occupation;
    if (step === 2) return !selections.ageGroup;
    if (step === 3) return selections.interests.length === 0;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="flex gap-3 mb-12">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                s <= step ? 'bg-[#1e3a8a]' : 'bg-gray-100'
              }`} 
            />
          ))}
        </div>

        <div className="space-y-8 relative z-10">
          <div className="space-y-2">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
              Step {step} of 3
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] tracking-tight">
              {currentStepData.title}
            </h1>
            <p className="text-gray-500 text-lg font-medium">
              {currentStepData.question}
            </p>
            {currentStepData.subtitle && (
              <p className="text-gray-400 text-sm font-medium">
                {currentStepData.subtitle}
              </p>
            )}
          </div>

          <div className="space-y-4 pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {currentStepData.options.map((option) => {
                  const isSelected = currentStepData.type === "single" 
                    ? (step === 1 ? selections.occupation === option : selections.ageGroup === option)
                    : selections.interests.includes(option);

                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`w-full p-5 rounded-2xl border-2 text-left font-bold text-lg transition-all flex items-center justify-between group ${
                        isSelected 
                          ? 'bg-blue-50 border-[#1e3a8a] text-[#1e3a8a] shadow-sm' 
                          : 'bg-gray-50 border-transparent text-gray-600 hover:border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {option}
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white' 
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}>
                        {isSelected && <Check size={14} strokeWidth={4} />}
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between pt-10">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-gray-400 transition-all ${
                step === 1 ? 'opacity-0 pointer-events-none' : 'hover:bg-gray-100 hover:text-gray-600'
              }`}
            >
              <ChevronLeft size={20} /> Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={isNextDisabled()}
              className={`flex items-center gap-2 px-10 py-4 rounded-2xl font-bold transition-all shadow-lg ${
                isNextDisabled()
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : step === 3 
                    ? 'bg-[#f97316] text-white hover:bg-[#ea580c] hover:scale-105' 
                    : 'bg-[#1e3a8a] text-white hover:bg-blue-900 hover:scale-105'
              }`}
            >
              {step === 3 ? 'Finish' : 'Next'} <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </div>
  );
};
