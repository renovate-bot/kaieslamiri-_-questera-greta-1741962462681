{/* Update email in Contact form */}
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Let's connect and discuss AI & Data opportunities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <a
                href="mailto:kaies@lamiri.xyz"
                className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaEnvelope className="text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p>kaies@lamiri.xyz</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/kaies-lamiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                  <p>Connect with me on LinkedIn</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Rest of the contact form remains the same */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default Contact;