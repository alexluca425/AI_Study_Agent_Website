
import { useEffect, useState } from 'react';

export const FoundersSection = () => {
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

    const element = document.getElementById('founders');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="founders" className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-streak absolute top-24 left-16 w-88 h-4 bg-gradient-to-r from-orange-400/30 to-pink-400/30 transform rotate-6"></div>
        <div className="floating-streak absolute bottom-32 right-24 w-72 h-3 bg-gradient-to-r from-blue-300/40 to-purple-300/40 transform -rotate-8"></div>
        <div className="absolute top-20 right-1/4 w-56 h-56 bg-gradient-to-br from-orange-100/40 to-red-100/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-20 section-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
            Who Built It?
          </h2>
        </div>

        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-gray-100/50 hover:shadow-3xl transition-all duration-500 section-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src="../../../public/lovable-uploads/Screenshot-2025-06-27-183112.png" 
                  alt="Founder" 
                  className="w-56 h-56 rounded-full object-cover shadow-2xl ring-4 ring-purple-100"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-8">
              <h3 className="text-4xl font-bold text-gray-900">Alex Luca</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Former top-level athlete turned AI builder. Discipline, grit, and a relentless 
                drive to solve the student motivation and performance crisis.
              </p>
              
              <blockquote className="relative text-2xl italic text-gray-800 pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                "We're not just building a tutor. We're reimagining how students learn in the AI era."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
