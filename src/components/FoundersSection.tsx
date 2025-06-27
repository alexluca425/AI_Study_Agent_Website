
export const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Who Built It?
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Founder" 
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Alex Johnson</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Former top-level athlete turned AI builder. Discipline, grit, and a relentless 
                drive to solve the student motivation and performance crisis.
              </p>
              
              <blockquote className="text-xl italic text-gray-800 border-l-4 border-purple-500 pl-6">
                "We're not just building a tutor. We're reimagining how students learn in the AI era."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
