
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      {/* Enhanced Animated Background Streaks */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating streaks */}
        <div className="floating-streak absolute top-10 left-20 w-96 h-3 bg-gradient-to-r from-purple-500/60 to-pink-500/60 transform -rotate-12"></div>
        <div className="floating-streak absolute top-32 right-16 w-80 h-2 bg-gradient-to-r from-blue-500/50 to-cyan-400/50 transform rotate-12"></div>
        <div className="floating-streak absolute bottom-32 left-1/4 w-72 h-4 bg-gradient-to-r from-green-400/40 to-emerald-500/40 transform -rotate-6"></div>
        <div className="floating-streak absolute bottom-16 right-1/3 w-64 h-3 bg-gradient-to-r from-orange-400/50 to-red-400/50 transform rotate-8"></div>
        
        {/* Additional smaller streaks */}
        <div className="floating-streak absolute top-1/2 left-10 w-48 h-2 bg-gradient-to-r from-violet-400/30 to-purple-400/30 transform rotate-45"></div>
        <div className="floating-streak absolute top-1/3 right-32 w-56 h-2 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 transform -rotate-30"></div>
        
        {/* Subtle background glow */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-8 section-fade-in ${isVisible ? 'visible' : ''}`}>
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
          The AI Tutor Built for the{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Modern Student
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Curriculum-aligned. Gamified. Adaptable. Loved by students and teachers.
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
};
