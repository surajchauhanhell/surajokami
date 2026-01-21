const Experience = () => {
  const experiences = [
    {
      title: 'Senior Mobile Developer',
      company: 'Tech Innovations',
      period: 'JAN/2023 - PRESENT',
      description: 'Leading mobile development projects using Flutter and React Native',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions',
      period: 'JUN/2021 - DEC/2022',
      description: 'Developed web applications and APIs using modern JavaScript frameworks',
    },
    {
      title: 'Product Designer',
      company: 'Creative Studio',
      period: 'JAN/2020 - MAY/2021',
      description: 'Designed user interfaces and experiences for mobile and web platforms',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Tech',
      period: 'JUL/2019 - DEC/2019',
      description: 'Contributed to various web development projects and learned industry practices',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            EXPERIENCE
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey and career milestones
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-8 rounded-2xl hover:border-black dark:hover:border-white transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-white dark:text-black font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                  <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-medium rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
