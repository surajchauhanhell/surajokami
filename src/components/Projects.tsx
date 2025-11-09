import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: 'PortBuild',
      description: 'No coding required! Build stunning, professional portfolios and resumes with our intuitive builder. Create your portfolio in minutes and export as ready-to-deploy HTML files instantly.',
      tags: ['Portfolio Builder', 'Web Builder', 'HTML Export', 'Productivity'],
      liveDemo: 'https://portbuild-mauve.vercel.app/',
      source: 'https://github.com/surajchauhanhell/PortBuild',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'OneXpertSheet',
      description: 'A comprehensive Flutter application integrated with Firebase and Excel API for seamless data management and synchronization.',
      tags: ['Flutter', 'Firebase', 'Excel API', 'Mobile'],
      liveDemo: 'https://drive.google.com/file/d/1ynXTbUcDppeftjsAshEiGOG_9GGtIeg1/view',
      source: 'https://drive.google.com/drive/folders/1A02BPUmdvdeDiqoKod4mHU6qfw7ERfTI',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Trendora',
      description: 'An elegant e-commerce platform built with modern web technologies, featuring smooth animations and responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      liveDemo: 'https://trendora-shop-elegance.vercel.app/',
      source: 'https://github.com/surajchauhanhell/trendora-shop-elegance',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'ShadowOkami',
      description: 'An innovative React application powered by AI/ML technologies, delivering intelligent and interactive user experiences.',
      tags: ['React', 'AI/ML', 'Modern UI', 'Web'],
      liveDemo: 'https://shadowokami.vercel.app/',
      source: 'https://github.com/surajchauhanhell/shadowokami',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'DeepPath',
      description: 'Advanced AI/ML solution for deepfake detection, helping identify manipulated media with high accuracy and reliability.',
      tags: ['AI/ML', 'Detection', 'Security', 'Python'],
      liveDemo: 'https://deeppathokami.vercel.app/',
      source: 'https://github.com/surajchauhanhell/DeepPath',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Some of the projects I've worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 }
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6">
                  <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={faCode} className="text-white text-2xl" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[80px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      <span>Live Demo</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
                      aria-label="View source code"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
