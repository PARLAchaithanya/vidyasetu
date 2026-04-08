import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award } from "lucide-react";
import { Quiz, Question } from "../types";

interface QuizSectionProps {
  quiz: Quiz | undefined;
  onComplete: (score: number) => void;
}

export const QuizSection = ({ quiz, onComplete }: QuizSectionProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  if (!quiz) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
          <Award size={40} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#1e3a8a]">No Quiz Available</h3>
          <p className="text-gray-500 max-w-xs">There is no quiz for this lesson yet. Check back later!</p>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    
    const isCorrect = selectedOption === currentQuestion.answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      onComplete(score + (selectedOption === currentQuestion.answer ? 1 : 0));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center space-y-8"
      >
        <div className="relative">
          <div className="w-40 h-40 rounded-full border-8 border-gray-100 flex items-center justify-center relative">
            <div 
              className="absolute inset-0 rounded-full border-8 border-[#1e3a8a] transition-all duration-1000"
              style={{ clipPath: `inset(${100 - percentage}% 0 0 0)` }}
            />
            <div className="text-4xl font-black text-[#1e3a8a]">{percentage}%</div>
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#f97316] text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap"
          >
            {score} / {quiz.questions.length} Correct
          </motion.div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-[#1e3a8a]">
            {percentage >= 80 ? "Excellent Work!" : percentage >= 50 ? "Good Job!" : "Keep Practicing!"}
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            {percentage >= 80 
              ? "You've mastered this topic! You're ready to move on to the next lesson." 
              : "You're getting there! Review the lesson notes and try again to improve your score."}
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={resetQuiz}
            className="flex items-center gap-2 px-8 py-4 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-2xl font-bold hover:bg-blue-50 transition-all"
          >
            <RotateCcw size={20} /> Retake Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-[#1e3a8a]">{quiz.topic} Quiz</h3>
          <p className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
        </div>
        <div className="flex gap-1">
          {quiz.questions.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                i === currentQuestionIndex ? 'bg-[#1e3a8a]' : 
                i < currentQuestionIndex ? 'bg-green-500' : 'bg-gray-200'
              }`} 
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-gray-800 leading-tight">
          {currentQuestion.question}
        </h4>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selectedOption;
            
            let statusClasses = "border-gray-200 hover:border-gray-300 hover:bg-gray-100";
            if (isAnswered) {
              if (isCorrect) statusClasses = "border-green-500 bg-green-50 text-green-700";
              else if (isSelected) statusClasses = "border-red-500 bg-red-50 text-red-700";
              else statusClasses = "border-gray-100 opacity-50";
            } else if (isSelected) {
              statusClasses = "border-[#1e3a8a] bg-blue-50 text-[#1e3a8a]";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={isAnswered}
                className={`w-full p-6 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between group ${statusClasses}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm transition-all ${
                    isSelected ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white' : 'border-gray-200 group-hover:border-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  {option}
                </div>
                {isAnswered && (
                  <div>
                    {isCorrect ? <CheckCircle2 className="text-green-500" size={24} /> : 
                     isSelected ? <XCircle className="text-red-500" size={24} /> : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-6 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedOption}
            className={`px-10 py-4 rounded-2xl font-bold transition-all shadow-lg ${
              !selectedOption 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-[#1e3a8a] text-white hover:bg-blue-900 hover:scale-105'
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="flex items-center gap-2 px-10 py-4 bg-[#f97316] text-white rounded-2xl font-bold shadow-lg hover:bg-[#ea580c] hover:scale-105 transition-all"
          >
            {currentQuestionIndex === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"} <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
