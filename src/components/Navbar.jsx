import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaCode className="text-2xl text-blue-500" />
              <span className="font-bold text-xl">Kaies LAMIRI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link to="/blog" className="hover:text-blue-500 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;