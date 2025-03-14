import { motion } from 'framer-motion';
import { FaLinkedin, FaCalendar } from 'react-icons/fa';

const Blog = () => {
  const linkedinPosts = [
    {
      id: 1,
      title: "Model Context Protocol (MCP)",
      excerpt: "Exploring the revolutionary Model Context Protocol (MCP) and its impact on AI development. Understanding how MCP is reshaping the way we approach context management in AI systems.",
      date: "2024-03-15",
      link: "https://www.linkedin.com/in/kaies-lamiri/"
    },
    {
      id: 2,
      title: "Manus: The New AI Revolution",
      excerpt: "Deep dive into Manus, the groundbreaking AI technology that's transforming the landscape of artificial intelligence. Discover how Manus is setting new standards in AI capabilities.",
      date: "2024-03-10",
      link: "https://www.linkedin.com/in/kaies-lamiri/"
    },
    {
      id: 3,
      title: "AI Ops: Best Practices for Excellence",
      excerpt: "Essential AI Operations practices that drive successful AI implementation. Learn about the key strategies and methodologies for maintaining robust AI systems at scale.",
      date: "2024-03-05",
      link: "https://www.linkedin.com/in/kaies-lamiri/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
          <p className="text-xl text-gray-600">Sharing knowledge and innovations in AI & Data Science</p>
          
          <a
            href="https://www.linkedin.com/in/kaies-lamiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mt-4"
          >
            <FaLinkedin className="text-xl" />
            <span>Follow me on LinkedIn</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {linkedinPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaCalendar className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read more on LinkedIn
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;