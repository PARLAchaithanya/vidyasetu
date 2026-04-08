import { AIWidget } from "../components/AIWidget";
import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Book, 
  MousePointer2, 
  BarChart3, 
  PlayCircle, 
  ClipboardCheck, 
  FileText, 
  TrendingUp, 
  ChevronRight 
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Page } from "../types";
import { COURSES } from "../constants";

interface HomePageProps {
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  onEnroll: (title: string) => void;
}

const Hero = ({ onNavigate, isLoggedIn }: { onNavigate: (page: Page, courseTitle?: string) => void, isLoggedIn: boolean }) => (
  <section className="px-12 py-24 flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 space-y-10"
    >
      <h1 className="text-[5.5rem] font-extrabold leading-[1.1] tracking-tight">
        <span className="text-[#1e3a8a]">Bridge your</span><br />
        <span className="text-[#f97316]">
          <span className="relative inline-block">
            learning
            <div className="absolute -bottom-2 left-0 w-24 h-1.5 bg-[#f97316] rounded-full" />
          </span> journey
        </span>
      </h1>
      <p className="text-gray-500 text-xl max-w-lg leading-relaxed">
        Structured courses, guided learning, and progress tracking all in one place. 
        Join thousands of students mastering new skills with VidyaSetu.
      </p>
      <div className="flex gap-6 pt-4">
        <button 
          onClick={() => {
            const element = document.getElementById('explore-courses');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#1e3a8a] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-900 transition-all text-lg"
        >
          Explore Courses
        </button>
        <button 
          onClick={() => {
            if (isLoggedIn) onNavigate('dashboard');
            else onNavigate('signup');
          }}
          className="border-2 border-[#1e3a8a] text-[#1e3a8a] px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all text-lg"
        >
          {isLoggedIn ? 'Go to Dashboard' : 'Get Started'}
        </button>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-1 relative"
    >
      <div className="bg-[#f1f3f5] rounded-[3rem] p-16 aspect-square flex items-center justify-center shadow-2xl border-[8px] border-white">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-10 w-full max-w-md border border-gray-100 transform -translate-y-4">
          <div className="flex items-center justify-between mb-10">
            <div className="h-6 w-36 bg-gray-100 rounded-full" />
            <div className="h-8 w-8 bg-gray-100 rounded-full" />
          </div>
          <div className="space-y-8">
            <div className="h-10 w-3/4 bg-gray-100 rounded-lg" />
            <div className="space-y-4">
              <div className="h-3 w-full bg-gray-100 rounded-full" />
              <div className="h-3 w-full bg-gray-100 rounded-full" />
              <div className="h-3 w-2/3 bg-gray-100 rounded-full" />
            </div>
            <div className="flex gap-4 pt-6">
              <div className="h-6 w-20 bg-gray-100 rounded-md" />
              <div className="h-6 w-20 bg-gray-100 rounded-md" />
              <div className="h-6 w-20 bg-gray-100 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const Features = () => (
  <section className="bg-[#f8fafc] py-24 px-8">
    <div className="max-w-7xl mx-auto text-center space-y-6 mb-20">
      <h2 className="text-5xl font-extrabold text-[#1e3a8a] tracking-tight">What is VidyaSetu?</h2>
      <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
        We provide the structure and tools you need to succeed in your educational<br className="hidden md:block" /> path.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {[
        { 
          icon: Book, 
          title: "Structured Learning", 
          desc: "Curated paths designed by experts to take you from beginner to advanced without any confusion.", 
          color: "bg-[#dbeafe] text-[#2563eb]" 
        },
        { 
          icon: MousePointer2, 
          title: "Easy Access", 
          desc: "Learn on your own schedule. Access your videos, notes, and assignments anytime, anywhere.", 
          color: "bg-[#ffedd5] text-[#f97316]" 
        },
        { 
          icon: BarChart3, 
          title: "Track Progress", 
          desc: "Visual analytics and milestones help you see exactly how far you've come in your learning journey.", 
          color: "bg-[#dcfce7] text-[#22c55e]" 
        }
      ].map((feature, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -8 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start text-left"
        >
          <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
            <feature.icon size={28} strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-5">{feature.title}</h3>
          <p className="text-gray-500 leading-relaxed text-lg">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const CourseCard = ({ title, category, image, onNavigate, isLoggedIn, onEnroll }: any) => (
  <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
    <div className="relative h-56 bg-slate-200">
      <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[#1e3a8a] uppercase tracking-wider">
        {category}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-2xl font-bold text-[#1e3a8a] mb-8">{title}</h3>
      
      <div className="mt-auto">
        <button 
          onClick={() => {
            if (!isLoggedIn) {
              onNavigate('login');
              return;
            }
            onEnroll(title);
            onNavigate('video', title);
          }}
          className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
        >
          Start Learning <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </div>
);

const ExploreCourses = ({ onNavigate, isLoggedIn, onEnroll }: { onNavigate: (page: Page, courseTitle?: string) => void, isLoggedIn: boolean, onEnroll: (title: string) => void }) => {
  return (
    <section id="explore-courses" className="py-20 px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-[#1e3a8a]">Explore Courses</h2>
          <p className="text-gray-500">Learn through videos and podcasts</p>
        </div>
        <a href="#" className="flex items-center gap-1 text-[#f97316] font-bold hover:underline">
          View All Courses <ChevronRight size={18} />
        </a>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <CourseCard 
            key={course.title} 
            {...course} 
            onNavigate={onNavigate}
            isLoggedIn={isLoggedIn}
            onEnroll={onEnroll}
          />
        ))}
      </div>
    </section>
  );
};

const Ecosystem = () => {
  const [showNotes, setShowNotes] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState<string | null>(null);

  return (
    <section className="bg-slate-50 py-20 px-8">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
        <h2 className="text-4xl font-bold text-[#1e3a8a]">What you can do</h2>
        <p className="text-gray-600">A complete ecosystem for your learning needs.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[
          { 
            icon: PlayCircle, 
            label: "Watch Lessons", 
            color: "text-blue-600",
            onClick: () => {
              const element = document.getElementById('explore-courses');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
          },
          { icon: ClipboardCheck, label: "Take Quizzes", color: "text-orange-600" },
          { 
            icon: FileText, 
            label: "Access Notes", 
            color: "text-indigo-600",
            onClick: () => {
              setShowNotes(!showNotes);
              setSelectedCourse(null);
            }
          },
          { icon: TrendingUp, label: "Track Growth", color: "text-orange-500" }
        ].map((item, i) => (
          <div 
            key={i} 
            onClick={item.onClick}
            className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-4 hover:shadow-md transition-all ${item.onClick ? 'cursor-pointer ring-2 ring-indigo-500/20 hover:ring-indigo-500/40' : ''}`}
          >
            <div className={`${item.color}`}>
              <item.icon size={32} />
            </div>
            <span className="font-bold text-[#1e3a8a]">{item.label}</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showNotes && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="max-w-6xl mx-auto mt-12 overflow-hidden"
          >
            {!selectedCourse ? (
              <div className="grid md:grid-cols-3 gap-6">
                {COURSES.map((course) => (
                  <button
                    key={course.title}
                    onClick={() => setSelectedCourse(course.title)}
                    className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Book size={24} />
                      </div>
                      <ChevronRight size={20} className="text-gray-300 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1e3a8a]">{course.title} Notes</h4>
                    <p className="text-gray-500 text-sm mt-2">{course.videos.filter(v => v.notesUrl).length} PDF modules available</p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="flex items-center gap-2 text-indigo-600 font-bold hover:underline"
                  >
                    <ChevronRight size={18} className="rotate-180" /> Back to Courses
                  </button>
                  <h4 className="text-2xl font-bold text-[#1e3a8a]">{selectedCourse} Study Materials</h4>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {COURSES.find(c => c.title === selectedCourse)?.videos
                    .filter(v => v.notesUrl)
                    .map((video) => (
                      <a
                        key={video.id}
                        href={video.notesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-2xl border border-gray-100 flex items-center gap-4 hover:bg-indigo-50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-white transition-colors">
                          <FileText size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[#1e3a8a] text-sm truncate">{video.title}</p>
                          <p className="text-xs text-gray-400">PDF Document</p>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                      </a>
                    ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Process = () => (
  <section className="py-20 px-8 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-[#1e3a8a] text-center mb-20">Simple 4-Step Process</h2>
    <div className="grid md:grid-cols-4 gap-12 relative">
      <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />
      {[
        { step: 1, title: "Sign Up", desc: "Create your free account in seconds.", color: "bg-[#1e3a8a]" },
        { step: 2, title: "Choose Course", desc: "Select from our library of curated paths.", color: "bg-[#f97316]" },
        { step: 3, title: "Learn Step-by-Step", desc: "Follow guided lessons and assignments.", color: "bg-[#1e3a8a]" },
        { step: 4, title: "Track Growth", desc: "Watch your skills improve with analytics.", color: "bg-[#f97316]" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center space-y-4">
          <div className={`w-24 h-24 ${item.color} text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl border-8 border-white`}>
            {item.step}
          </div>
          <h3 className="text-xl font-bold text-[#1e3a8a]">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Team = () => (
  <section id="meet-the-team" className="bg-slate-50 py-20 px-8">
    <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
      <h2 className="text-4xl font-bold text-[#1e3a8a]">Meet the Team</h2>
      <p className="text-gray-600">The passionate educators behind VidyaSetu.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {[
        { 
          name: "Subrat", 
          role: "Team Lead", 
          image: "https://res.cloudinary.com/dsiwumpo7/image/upload/v1775581818/subrath_tvgmxa.jpg" 
        },
        { 
          name: "Yuvan", 
          role: "Frontend Developer", 
          image: "https://res.cloudinary.com/dsiwumpo7/image/upload/v1775569938/yuvan_hfdl1a.jpg" 
        },
        { 
          name: "Siddharth", 
          role: "Backend Developer", 
          image: "https://res.cloudinary.com/dsiwumpo7/image/upload/v1775581855/siddharth_lsohab.jpg" 
        },
        { 
          name: "Chaitanya", 
          role: "Content Strategist", 
          image: "https://res.cloudinary.com/dsiwumpo7/image/upload/v1775569854/chaithu_kcfelp.jpg" 
        },
        { 
          name: "Himaja", 
          role: "Cloud", 
          image: "https://res.cloudinary.com/dsiwumpo7/image/upload/v1775569915/himaja_eibakk.jpg" 
        },
        { 
          name: "Ghayini", 
          role: "UI/UX Designer", 
          image: "https://res.cloudinary.com/dsiwumpo7/image/upload/v1775569890/ghayani_osn8fc.jpg" 
        }
      ].map((member, i) => (
        <div key={i} className="flex flex-col items-center text-center space-y-4">
          <div className="w-40 h-40 rounded-full shadow-2xl relative overflow-hidden bg-slate-200">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1e3a8a]">{member.name}</h3>
            <p className="text-[#f97316] font-medium">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export const HomePage = ({ onNavigate, isLoggedIn, onLogout, onEnroll }: HomePageProps) => {
  return (
    <>
      <Navbar 
        onNavigate={onNavigate} 
        isLoggedIn={isLoggedIn} 
        onLogout={onLogout} 
      />
      <main>
        <Hero onNavigate={onNavigate} isLoggedIn={isLoggedIn} />
        <Features />
        <ExploreCourses onNavigate={onNavigate} isLoggedIn={isLoggedIn} onEnroll={onEnroll} />
        <Ecosystem />
        <Process />
        <Team />
      </main>
      <AIWidget />
      <footer className="bg-[#1e3a8a] h-20 w-full" />
    </>
  );
};
