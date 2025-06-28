
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

export const IsItForMeSection = () => {
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

    const element = document.getElementById('is-it-for-me');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="is-it-for-me" className="relative py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-streak absolute top-16 right-20 w-80 h-3 bg-gradient-to-r from-purple-400/40 to-blue-400/40 transform -rotate-12"></div>
        <div className="floating-streak absolute bottom-20 left-32 w-96 h-2 bg-gradient-to-r from-green-300/30 to-emerald-400/30 transform rotate-8"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-16 w-72 h-72 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-24 section-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
            Who It's For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className={`text-center p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-purple-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.1s'}}>
            <CheckCircle className="w-16 h-16 text-purple-600 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Schools & Teachers</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Track classroom learning in real time with comprehensive analytics and insights 
              that help you understand every student's progress.
            </p>
          </div>

          <div className={`text-center p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
            <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Students</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn faster, study smarter, and actually enjoy it with personalized, 
              gamified learning that adapts to your pace and style.
            </p>
          </div>

          <div className={`text-center p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-green-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Parents</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Be confident your child is supported and improving with transparent 
              progress tracking and continuous learning support.
            </p>
          </div>
        </div>

        <div className={`text-center section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.4s'}}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
          >
            <a href="https://calendly.com/alex-luca425/book-a-call-with-me" target="_blank" rel="noopener noreferrer">See it in action</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
