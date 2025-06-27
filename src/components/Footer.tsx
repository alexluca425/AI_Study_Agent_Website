

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white py-8 overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-streak absolute top-2 left-20 w-32 h-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform rotate-12"></div>
        <div className="floating-streak absolute bottom-2 right-24 w-40 h-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 transform -rotate-8"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            AI Tutor
          </div>
          
          <div className="mb-6">
            <a 
              href="mailto:hello@aitutor.com" 
              className="text-lg text-gray-300 hover:text-white transition-all duration-300"
            >
              hello@aitutor.com
            </a>
          </div>

          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Instagram</a>
          </div>

          <div className="border-t border-gray-700/50 pt-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-all duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-all duration-300">Terms of Service</a>
              <span>&copy; 2024 AI Tutor. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

