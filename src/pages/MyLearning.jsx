import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaPlayCircle, FaCheckCircle, FaClock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    progress: 75,
    lastAccessed: "2024-03-15",
    nextLesson: "CSS Flexbox",
    totalLessons: 24,
    completedLessons: 18
  },
  {
    id: 2,
    title: "Python Programming",
    progress: 30,
    lastAccessed: "2024-03-14",
    nextLesson: "Functions",
    totalLessons: 32,
    completedLessons: 10
  }
];

const CourseProgressCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4">{course.title}</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="text-indigo-600 font-bold">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 rounded-full h-2"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <FaPlayCircle className="mr-2" />
          <span>Next: {course.nextLesson}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaCheckCircle className="mr-2" />
          <span>{course.completedLessons}/{course.totalLessons} lessons completed</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaClock className="mr-2" />
          <span>Last accessed: {course.lastAccessed}</span>
        </div>
      </div>

      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
        Continue Learning
      </button>
    </motion.div>
  );
};

const MyLearning = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Learning</h1>
          <p className="text-xl text-gray-600">Track your progress and continue learning</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(course => (
            <CourseProgressCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLearning;