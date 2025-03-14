import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaCog, FaBell } from 'react-icons/fa';

const Profile = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="md:w-64 bg-gray-50 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-indigo-600 mx-auto mb-4 flex items-center justify-center">
                  <FaUser className="text-white text-3xl" />
                </div>
                <h2 className="text-xl font-bold">{user?.email || 'User'}</h2>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'profile' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaUser className="mr-2" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'notifications' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaBell className="mr-2" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                    activeTab === 'settings' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaCog className="mr-2" />
                  Settings
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        readOnly
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                      Save Changes
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Notifications</h3>
                  <p className="text-gray-600">No new notifications</p>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Email Notifications</span>
                      <input type="checkbox" className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dark Mode</span>
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;