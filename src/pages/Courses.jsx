import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaStar, FaUsers, FaClock } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript basics",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 49.99,
    rating: 4.8,
    students: 1234,
    duration: "8 weeks"
  },
  {
    id: 2,
    title: "Python Programming",
    description: "Master Python programming from scratch",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 59.99,
    rating: 4.9,
    students: 2341,
    duration: "10 weeks"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 39.99,
    rating: 4.7,
    students: 1876,
    duration: "6 weeks"
  }
];

const CourseCard = ({ course }) => {
  const { isAuthenticated } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    if (isAuthenticated) {
      setIsEnrolled(true);
    } else {
      window.location.hash = '/login';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="text-gray-400 mr-1" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="text-gray-400 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">${course.price}</span>
          <button
            onClick={handleEnroll}
            className={`px-4 py-2 rounded-md ${
              isEnrolled
                ? 'bg-green-500 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
            disabled={isEnrolled}
          >
            {isEnrolled ? 'Enrolled' : 'Enroll Now'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Expand your knowledge with our expert-led courses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;