
import { Brain, Target, Users, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

export const WhatItIsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('what-it-is');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-it-is" className="relative py-32 bg-white overflow-hidden">
      {/* Background Color Streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-streak absolute top-20 left-10 w-72 h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 transform rotate-12"></div>
        <div className="floating-streak absolute bottom-24 right-16 w-64 h-2 bg-gradient-to-r from-green-300/40 to-cyan-300/40 transform -rotate-6"></div>
        <div className="absolute top-32 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-24 section-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
            What It Is
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Our AI tutor adapts to every student's learning style in real time, identifies mistake patterns, 
            and uses Socratic questioning to build critical thinking. Gamified practice keeps students 
            coming back. Teachers get a live dashboard with classroom-wide insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          <div className={`text-center group section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.1s'}}>
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Learning</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Real-time adaptation to each student's unique learning style</p>
          </div>

          <div className={`text-center group section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-xl">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pattern Recognition</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Identifies and addresses recurring mistake patterns</p>
          </div>

          <div className={`text-center group section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gamified Practice</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Engaging, game-like experience that motivates learning</p>
          </div>

          <div className={`text-center group section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.4s'}}>
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-xl">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Dashboard</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Real-time insights for teachers and classroom analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};
