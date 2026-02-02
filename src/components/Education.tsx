import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const educationData = [
    {
      type: 'degree',
      title: 'B.Sc. in Computer Science',
      institution: 'SICES College',
      period: '2023 - 2026',
      icon: faGraduationCap,
      description: 'Pursuing Bachelor of Science with focus on software development and emerging technologies.',
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
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full shadow-neon"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="glass p-6 md:p-8 rounded-2xl hover:border-neon-purple/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mb-6 bg-neon-purple/20 rounded-2xl flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-neon-purple font-medium mb-1">
                {item.institution}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {item.period}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-white hover:text-neon-purple transition-colors"
                >
                  <span>Verify Certificate</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
