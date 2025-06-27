
import { CheckCircle } from 'lucide-react';

export const SocialProofSection = () => {
  return (
    <section id="social-proof" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Can You Trust It?
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 mb-16">
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
              "100% of students who tested the tutor said it helped them prepare for their exam."
            </blockquote>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Rolled out in first school for Grade 9 & 10</p>
          </div>

          <div className="text-center p-6">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Interest</h3>
            <p className="text-gray-600">20+ meetings with schools/tutoring companies</p>
          </div>

          <div className="text-center p-6">
            <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Addressing Real Need</h3>
            <p className="text-gray-600">15% of Ontario Grade 10 students fail literacy test — we're fixing that</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Leading Schools</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold text-gray-600">School Partner 1</div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold text-gray-600">School Partner 2</div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold text-gray-600">School Partner 3</div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold text-gray-600">School Partner 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};
