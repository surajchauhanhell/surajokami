import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: 'PortBuild',
      description: 'No coding required! Build stunning, professional portfolios and resumes with our intuitive builder. Create your portfolio in minutes and export as ready-to-deploy HTML files instantly.',
      tags: ['Portfolio Builder', 'Web Builder', 'HTML Export', 'Productivity'],
      liveDemo: 'https://portbuild-mauve.vercel.app/',
      source: 'https://github.com/surajchauhanhell/PortBuild',
      gradient: 'from-neon-purple',
      textColor: 'text-neon-purple',
    },
    {
      title: 'OneXpertSheet',
      description: 'A comprehensive Flutter application integrated with Firebase and Excel API for seamless data management and synchronization.',
      tags: ['Flutter', 'Firebase', 'Excel API', 'Mobile'],
      liveDemo: 'https://drive.google.com/file/d/1ynXTbUcDppeftjsAshEiGOG_9GGtIeg1/view',
      source: 'https://github.com/surajchauhanhell/onexpertsheet',
      gradient: 'from-blue-500',
      textColor: 'text-blue-500',
    },
    {
      title: 'Trendora',
      description: 'An elegant e-commerce platform built with modern web technologies, featuring smooth animations and responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      liveDemo: 'https://trendora-shop-elegance.vercel.app/',
      source: 'https://github.com/surajchauhanhell/trendora-shop-elegance',
      gradient: 'from-neon-pink', // was pink-500
      textColor: 'text-neon-pink',
    },
    {
      title: 'ShadowOkami',
      description: 'An innovative React application powered by AI/ML technologies, delivering intelligent and interactive user experiences.',
      tags: ['React', 'AI/ML', 'Modern UI', 'Web'],
      liveDemo: 'https://shadowokami.vercel.app/',
      source: 'https://github.com/surajchauhanhell/shadowokami',
      gradient: 'from-red-500',
      textColor: 'text-red-500',
    },
    {
      title: 'DeepPath',
      description: 'Advanced AI/ML solution for deepfake detection, helping identify manipulated media with high accuracy and reliability.',
      tags: ['AI/ML', 'Detection', 'Security', 'Python'],
      liveDemo: 'https://deeppathokami.vercel.app/',
      source: 'https://github.com/surajchauhanhell/DeepPath',
      gradient: 'from-green-500',
      textColor: 'text-green-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full shadow-neon"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300 group flex flex-col"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} to-purple-600`}></div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>
                  <FontAwesomeIcon icon={faCode} className={`${project.textColor} text-xl`} />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-neon-purple/10 border border-neon-purple/50 text-neon-purple rounded-lg text-center font-medium hover:bg-neon-purple hover:text-white transition-all duration-300"
                  >
                    Demo <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
                  </a>

                  {project.source ? (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-gray-600 text-gray-400 rounded-lg hover:border-white hover:text-white transition-all duration-300"
                      aria-label="Source"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  ) : (
                    <button
                      className="w-10 h-10 flex items-center justify-center border border-gray-600 text-gray-400 rounded-lg cursor-not-allowed opacity-50"
                      title="Private Source"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
