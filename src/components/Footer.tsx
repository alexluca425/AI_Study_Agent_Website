
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              AI Tutor
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Curriculum-aligned AI tutoring that adapts to every student's learning style. Built for the modern classroom.
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pages</h3>
            <div className="space-y-2">
              <a href="#what-it-is" className="block text-gray-300 hover:text-white transition-colors text-sm">What It Is</a>
              <a href="#is-it-for-me" className="block text-gray-300 hover:text-white transition-colors text-sm">Is It For Me?</a>
              <a href="#founders" className="block text-gray-300 hover:text-white transition-colors text-sm">Founders</a>
              <a href="#social-proof" className="block text-gray-300 hover:text-white transition-colors text-sm">Social Proof</a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:hello@aitutor.com" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                hello@aitutor.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  Twitter
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <span>© 2024 AI Tutor • All rights reserved</span>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
