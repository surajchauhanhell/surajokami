import { useState, useEffect } from 'react';

const Skills = () => {

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are my technical skills and expertise that I've developed over the years.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {mainSkills.map((skill) => (
              <div
                key={skill.name}
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
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
