import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kaies LAMIRI</h3>
            <p className="text-gray-400">
              Lead Data & AI | Innovation & Digital Transformation
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/kaies-lamiri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:kaies@lamiri.xyz"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#/about" className="hover:text-blue-500 transition-colors">About Me</a></li>
              <li><a href="#/blog" className="hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#/contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kaies LAMIRI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;