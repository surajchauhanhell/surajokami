import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const educationData = [
    {
      type: 'degree',
      title: 'B.Tech in Computer Science',
      institution: 'SICES College',
      period: '2023 - 2026',
      icon: faGraduationCap,
      description: 'Pursuing Bachelor of Technology with focus on software development and emerging technologies.',
    },
    {
      type: 'certificate',
      title: 'Building Games using JavaScript',
      institution: 'Great Learning',
      period: 'August 2022',
      icon: faCertificate,
      link: 'https://www.mygreatlearning.com/certificate/MTUBJRRT',
      description: 'Comprehensive course on game development fundamentals using JavaScript.',
    },
    {
      type: 'certificate',
      title: 'Data Science Foundations',
      institution: 'Great Learning',
      period: 'August 2022',
      icon: faCertificate,
      link: 'https://www.mygreatlearning.com/certificate/AXWHGKVH',
      description: 'Foundation course covering data analysis, statistics, and machine learning basics.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              data-aos="flip-up"
              data-aos-delay={index * 100}
              className="relative group"
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={item.icon} className="text-white text-2xl" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {item.title}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-center mb-2">
                    {item.institution}
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-4">
                    {item.period}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-6">
                    {item.description}
                  </p>

                  {item.link && (
                    <div className="text-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <span>Verify Certificate</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
