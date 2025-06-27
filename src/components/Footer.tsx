
export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-streak absolute top-10 left-20 w-64 h-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform rotate-12"></div>
        <div className="floating-streak absolute bottom-16 right-24 w-72 h-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 transform -rotate-8"></div>
        <div className="absolute top-1/4 right-16 w-48 h-48 bg-purple-800/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-20 w-56 h-56 bg-pink-800/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            AI Tutor
          </div>
          
          <div className="mb-12">
            <a 
              href="mailto:hello@aitutor.com" 
              className="text-2xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 inline-block"
            >
              hello@aitutor.com
            </a>
          </div>

          <div className="flex justify-center space-x-12 mb-12">
            <a href="#" className="text-lg text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Twitter</a>
            <a href="#" className="text-lg text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">LinkedIn</a>
            <a href="#" className="text-lg text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Instagram</a>
          </div>

          <div className="border-t border-gray-700/50 pt-12">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 text-gray-400">
              <a href="#" className="hover:text-white transition-all duration-300 hover:scale-105">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-all duration-300 hover:scale-105">Terms of Service</a>
              <span>&copy; 2024 AI Tutor. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
