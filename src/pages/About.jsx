import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaCloud, FaTools, FaDocker, FaGitlab } from 'react-icons/fa';

const About = () => {
  const skills = [
    { 
      category: "AI & Data", 
      items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI", "LangChain"]
    },
    { 
      category: "Databases & Storage", 
      items: ["PostgreSQL", "MongoDB", "Redis", "MinIO", "S3", "Data Lakes"] 
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"] 
    },
    { 
      category: "Tools & Platforms", 
      items: ["GitLab", "Jira", "Airflow", "MLflow", "DVC", "Weights & Biases"] 
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">Lead Data & AI | Innovation & Digital Transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Professional Journey</h2>
            <p className="text-gray-600">
              With over 8 years of experience in developing and delivering data engineering and AI projects, 
              I am Kaies Lamiri, a seasoned professional with a strong background in Python and database 
              technologies. I have a passion for solving complex problems through data-driven solutions.
            </p>
            <p className="text-gray-600">
              In my current role, I am responsible for the technical vision, strategy, and execution of 
              data and AI products and services, ensuring they are scalable, reliable, and secure. I 
              collaborate closely with data scientists, data engineers, and business stakeholders to 
              deliver high-quality AI solutions that meet the needs and expectations of our clients and 
              users. My mission is to enable each of us to benefit from the power and potential of AI 
              in everyday life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;