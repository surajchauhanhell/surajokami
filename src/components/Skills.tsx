import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainSkills = [
    { name: 'Flutter', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Kotlin', level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'Java', level: 80, color: 'from-red-500 to-red-600' },
    { name: 'Python', level: 75, color: 'from-green-500 to-green-600' },
    { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-600' },
    { name: 'UI/UX Design', level: 70, color: 'from-pink-500 to-pink-600' },
  ];

  const otherSkills = [
    'HTML & CSS',
    'JavaScript',
    'Git',
    'SQL',
    'Video Editing',
    'REST APIs',
    'AWS',
    'Responsive Design',
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are my technical skills and expertise that I've developed over the years.
          </p>
        </motion.div>

        <div ref={ref} className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {mainSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
