'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

const OCCUPATIONS = ['Student', 'Teacher', 'Trainer', 'Others'];
const AGE_GROUPS = ['13-17', '18-25', '25 above'];
const INTERESTS = ['Data Structure', 'Python', 'DBMS'];

export function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [occupation, setOccupation] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const { user, updateOnboarding } = useAuth();
  const router = useRouter();

  const handleInterestToggle = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (step === 1 && !occupation) {
      alert('Please select an occupation');
      return;
    }
    if (step === 2 && !ageGroup) {
      alert('Please select an age group');
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinish = async () => {
    if (interests.length === 0) {
      alert('Please select at least one interest');
      return;
    }

    try {
      await updateOnboarding({
        occupation,
        ageGroup,
        interests,
        completed: true,
      });
      router.push('/');
    } catch (error) {
      alert('Unable to save onboarding details. Please try again.');
    }
  };

  const progressPercentage = (step / 3) * 100;

  return (
    <div className="relative rounded-3xl border border-white/20 bg-[rgba(180,170,220,0.25)] p-8 shadow-2xl backdrop-blur-xl md:p-10">
      {/* Inner glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />

      {/* Progress indicator */}
      <div className="mb-8 flex gap-2">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`h-2 flex-1 rounded-full transition-colors ${
              dot <= step ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      <p className="text-sm font-semibold text-white/70 uppercase tracking-wide">
        Step {step} of 3
      </p>

      <h1 className="mb-3 text-center text-3xl font-bold italic text-white md:text-4xl">
        Tell us about yourself
      </h1>

      {/* Step 1: Occupation */}
      {step === 1 && (
        <>
          <p className="mb-8 text-center text-lg text-white/80">
            What is your current occupation?
          </p>

          <div className="space-y-4">
            {OCCUPATIONS.map((occ) => (
              <button
                key={occ}
                onClick={() => setOccupation(occ)}
                className={`w-full rounded-2xl border-2 p-4 text-left text-lg font-semibold transition-all ${
                  occupation === occ
                    ? 'border-white bg-white/10 text-white'
                    : 'border-white/30 bg-transparent text-white hover:border-white/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{occ}</span>
                  <div
                    className={`h-6 w-6 rounded-full border-2 ${
                      occupation === occ
                        ? 'border-white bg-white'
                        : 'border-white/50'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Step 2: Age Group */}
      {step === 2 && (
        <>
          <p className="mb-8 text-center text-lg text-white/80">
            Which age group do you belong to?
          </p>

          <div className="space-y-4">
            {AGE_GROUPS.map((group) => (
              <button
                key={group}
                onClick={() => setAgeGroup(group)}
                className={`w-full rounded-2xl border-2 p-4 text-left text-lg font-semibold transition-all ${
                  ageGroup === group
                    ? 'border-white bg-white/10 text-white'
                    : 'border-white/30 bg-transparent text-white hover:border-white/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{group}</span>
                  <div
                    className={`h-6 w-6 rounded-full border-2 ${
                      ageGroup === group
                        ? 'border-white bg-white'
                        : 'border-white/50'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Step 3: Interests */}
      {step === 3 && (
        <>
          <p className="mb-2 text-center text-lg text-white/80">
            What are your interests?
          </p>
          <p className="mb-8 text-center text-sm text-white/60">
            Select all that apply
          </p>

          <div className="space-y-4">
            {INTERESTS.map((interest) => (
              <button
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`w-full rounded-2xl border-2 p-4 text-left text-lg font-semibold transition-all ${
                  interests.includes(interest)
                    ? 'border-white bg-white/10 text-white'
                    : 'border-white/30 bg-transparent text-white hover:border-white/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{interest}</span>
                  <div
                    className={`h-6 w-6 rounded-full border-2 ${
                      interests.includes(interest)
                        ? 'border-white bg-white'
                        : 'border-white/50'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Navigation buttons */}
      <div className="mt-12 flex gap-4">
        <button
          onClick={handleBack}
          disabled={step === 1}
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>

        <div className="flex-1" />

        {step < 3 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r from-[#ec4899] to-[#f472b6] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
          >
            Finish
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
