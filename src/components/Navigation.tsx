
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-100/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/AI_Study_Agent_logo.png" 
              alt="AI Tutor Logo" 
              className="h-8 w-8"
            />
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Study Agent
            </div>
          </div>
          <div className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('what-it-is')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              What It Is
            </button>
            <button 
              onClick={() => scrollToSection('is-it-for-me')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Who It's For
            </button>
            <button 
              onClick={() => scrollToSection('founders')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Founders
            </button>
            <button 
              onClick={() => scrollToSection('social-proof')}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Social Proof
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
