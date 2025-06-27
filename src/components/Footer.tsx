
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            AI Tutor
          </div>
          
          <div className="mb-8">
            <a 
              href="mailto:hello@aitutor.com" 
              className="text-xl text-gray-300 hover:text-white transition-colors"
            >
              hello@aitutor.com
            </a>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>&copy; 2024 AI Tutor. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
