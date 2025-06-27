
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const IsItForMeSection = () => {
  return (
    <section id="is-it-for-me" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Is It For Me?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-shadow duration-300">
            <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Schools & Teachers</h3>
            <p className="text-gray-600 leading-relaxed">
              Track classroom learning in real time with comprehensive analytics and insights 
              that help you understand every student's progress.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Students</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn faster, study smarter, and actually enjoy it with personalized, 
              gamified learning that adapts to your pace and style.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-shadow duration-300">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Parents</h3>
            <p className="text-gray-600 leading-relaxed">
              Be confident your child is supported and improving with transparent 
              progress tracking and continuous learning support.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            See it in action
          </Button>
        </div>
      </div>
    </section>
  );
};
