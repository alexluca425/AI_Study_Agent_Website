
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/7414ea5f-40a1-49eb-9dab-373eae1fbce6.png" 
              alt="AI Tutor Logo" 
              className="h-8 w-8 filter brightness-0 invert"
            />
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Study Agent
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm items-center">
            {/* <a href="#what-it-is" className="text-gray-300 hover:text-white transition-colors">What It Is</a>
            <a href="#is-it-for-me" className="text-gray-300 hover:text-white transition-colors">Is It For Me?</a>
            <a href="#founders" className="text-gray-300 hover:text-white transition-colors">Founders</a>
            <a href="#social-proof" className="text-gray-300 hover:text-white transition-colors">Social Proof</a> */}
            <a href="mailto:alex@aistudyagent.com" className="text-gray-300 hover:text-white transition-colors flex items-center">alex@aistudyagent.com</a>
            <a href="https://www.linkedin.com/company/106410950/admin/dashboard/" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <img src="/lovable-uploads/linkedIn_PNG19.png" alt="LinkedIn Logo" className="h-6 w-6 mx-auto filter brightness-0 invert hover:contrast-50 transition-all duration-200" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          <span>© 2025 AI Study Agent • All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
