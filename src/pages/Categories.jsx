import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaChartLine, FaPalette, FaLanguage, FaMusic } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    title: "Programming",
    icon: FaCode,
    courses: 150,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Personal Development",
    icon: FaBrain,
    courses: 85,
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Business",
    icon: FaChartLine,
    courses: 120,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Design",
    icon: FaPalette,
    courses: 90,
    color: "bg-pink-500"
  },
  {
    id: 5,
    title: "Languages",
    icon: FaLanguage,
    courses: 75,
    color: "bg-yellow-500"
  },
  {
    id: 6,
    title: "Music",
    icon: FaMusic,
    courses: 60,
    color: "bg-red-500"
  }
];

const CategoryCard = ({ category }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{category.title}</h3>
      <p className="text-gray-600 text-center">{category.courses} courses</p>
    </motion.div>
  );
};

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Categories</h1>
          <p className="text-xl text-gray-600">Explore our wide range of categories</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;