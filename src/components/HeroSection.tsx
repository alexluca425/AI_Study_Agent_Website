
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Streaks */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -rotate-12 animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-64 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform rotate-12 animate-pulse opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transform -rotate-6 animate-pulse opacity-60 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transform rotate-6 animate-pulse opacity-60 animation-delay-3000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          The AI Tutor Built for the{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Modern Student
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Curriculum-aligned. Gamified. Adaptable. Loved by students and teachers.
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
};
