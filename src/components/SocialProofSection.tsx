
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export const SocialProofSection = () => {
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

    const element = document.getElementById('social-proof');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="social-proof" className="relative py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-streak absolute top-20 left-24 w-96 h-4 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 transform rotate-12"></div>
        <div className="floating-streak absolute bottom-24 right-32 w-80 h-3 bg-gradient-to-r from-purple-400/30 to-pink-400/30 transform -rotate-6"></div>
        <div className="absolute top-32 right-16 w-72 h-72 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-20 section-fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 tracking-tight">
            Can You Trust It?
          </h2>
          
          <div className={`bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-3xl p-16 mb-20 border border-purple-100/50 shadow-xl section-fade-in ${isVisible ? 'visible' : ''}`}>
            <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 leading-relaxed">
              "100% of students who tested the tutor said it helped them prepare for their exam."
            </blockquote>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className={`text-center p-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.1s'}}>
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Rolled out in first school for Grade 9 & 10</p>
          </div>

          <div className={`text-center p-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
            <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Interest</h3>
            <p className="text-lg text-gray-600 leading-relaxed">20+ meetings with schools/tutoring companies</p>
          </div>

          <div className={`text-center p-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            <CheckCircle className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Addressing Real Need</h3>
            <p className="text-lg text-gray-600 leading-relaxed">15% of Ontario Grade 10 students fail literacy test — we're fixing that</p>
          </div>
        </div>

        <div className={`text-center section-fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Leading Schools</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white/60 backdrop-blur-sm px-10 py-6 rounded-2xl text-xl font-semibold text-gray-600 border border-gray-200/50 hover:shadow-lg transition-all duration-300">School Partner 1</div>
            <div className="bg-white/60 backdrop-blur-sm px-10 py-6 rounded-2xl text-xl font-semibold text-gray-600 border border-gray-200/50 hover:shadow-lg transition-all duration-300">School Partner 2</div>
            <div className="bg-white/60 backdrop-blur-sm px-10 py-6 rounded-2xl text-xl font-semibold text-gray-600 border border-gray-200/50 hover:shadow-lg transition-all duration-300">School Partner 3</div>
            <div className="bg-white/60 backdrop-blur-sm px-10 py-6 rounded-2xl text-xl font-semibold text-gray-600 border border-gray-200/50 hover:shadow-lg transition-all duration-300">School Partner 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};
