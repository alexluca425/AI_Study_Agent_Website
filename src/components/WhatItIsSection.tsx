
import { Brain, Target, Users, BarChart3 } from 'lucide-react';

export const WhatItIsSection = () => {
  return (
    <section id="what-it-is" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What It Is
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our AI tutor adapts to every student's learning style in real time, identifies mistake patterns, 
            and uses Socratic questioning to build critical thinking. Gamified practice keeps students 
            coming back. Teachers get a live dashboard with classroom-wide insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Adaptive Learning</h3>
            <p className="text-gray-600">Real-time adaptation to each student's unique learning style</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
            <p className="text-gray-600">Identifies and addresses recurring mistake patterns</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Gamified Practice</h3>
            <p className="text-gray-600">Engaging, game-like experience that motivates learning</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Dashboard</h3>
            <p className="text-gray-600">Real-time insights for teachers and classroom analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};
