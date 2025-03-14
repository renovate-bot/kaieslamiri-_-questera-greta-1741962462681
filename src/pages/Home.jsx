import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          filter: "brightness(0.3)"
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm Kaies LAMIRI
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Lead Data & AI | Innovation & Digital Transformation 🚀 | AI & Data Analysis 📊 | Enlightened Leadership 🌟
          </p>

          <p className="text-lg mb-8 text-gray-400">
            Passionate about driving innovation through AI and data-driven solutions. Leading digital transformation initiatives and fostering enlightened leadership in the AI era.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/kaies-lamiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;