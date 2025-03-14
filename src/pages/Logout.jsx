import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Thank you for learning with us!
        </h2>
        <p className="text-gray-600 text-lg">
          "The beautiful thing about learning is that no one can take it away from you."
        </p>
        <p className="text-gray-500 mt-4">
          Redirecting you to the home page...
        </p>
      </motion.div>
    </div>
  );
};

export default Logout;