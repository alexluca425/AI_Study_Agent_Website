
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI Tutor
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('what-it-is')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              What It Is
            </button>
            <button 
              onClick={() => scrollToSection('is-it-for-me')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Is It For Me?
            </button>
            <button 
              onClick={() => scrollToSection('founders')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Founders
            </button>
            <button 
              onClick={() => scrollToSection('social-proof')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Social Proof
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
