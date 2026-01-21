import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'PortBuild',
      description: 'No coding required! Build stunning, professional portfolios and resumes with our intuitive builder.',
      tags: ['Portfolio Builder', 'Productivity'],
      liveDemo: 'https://portbuild-mauve.vercel.app/',
      source: 'https://github.com/surajchauhanhell/PortBuild',
      category: 'Web Application',
      image: 'https://placehold.co/600x400/1a1a1a/bd00ff?text=PortBuild+Preview', // Placeholder
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      title: 'OneXpertSheet',
      description: 'Comprehensive Flutter app integrated with Firebase and Excel API for seamless data sync.',
      tags: ['Flutter', 'Firebase', 'Mobile'],
      liveDemo: 'https://drive.google.com/file/d/1ynXTbUcDppeftjsAshEiGOG_9GGtIeg1/view',
      source: 'https://github.com/surajchauhanhell/onexpertsheet',
      category: 'Mobile Application',
      image: 'https://placehold.co/600x400/1a1a1a/3b82f6?text=OneXpertSheet+Preview', // Placeholder
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Trendora',
      description: 'Elegant e-commerce platform with modern web technologies and smooth animations.',
      tags: ['E-commerce', 'React'],
      liveDemo: 'https://trendora-shop-elegance.vercel.app/',
      source: 'https://github.com/surajchauhanhell/trendora-shop-elegance',
      category: 'Web Application',
      image: 'https://placehold.co/600x400/1a1a1a/ec4899?text=Trendora+Preview', // Placeholder
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'ShadowOkami',
      description: 'Innovative React app powered by AI/ML technologies for intelligent user experiences.',
      tags: ['AI/ML', 'React'],
      liveDemo: 'https://shadowokami.vercel.app/',
      source: 'https://github.com/surajchauhanhell/shadowokami',
      category: 'Web Application',
      image: 'https://placehold.co/600x400/1a1a1a/ef4444?text=ShadowOkami+Preview', // Placeholder
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'DeepPath',
      description: 'Advanced deepfake detection solution identifying manipulated media with high accuracy.',
      tags: ['AI/ML', 'Python'],
      liveDemo: 'https://deeppathokami.vercel.app/',
      source: 'https://github.com/surajchauhanhell/DeepPath',
      category: 'Web Application',
      image: 'https://placehold.co/600x400/1a1a1a/10b981?text=DeepPath+Preview', // Placeholder
      gradient: 'from-emerald-500 to-green-500',
    },
  ];

  const categories = ['All', 'Web Application', 'Mobile Application'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
            My Projects
          </h2>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === category
                  ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white border-transparent shadow-neon'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="glass rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300 group flex flex-col border border-white/5"
              >
                {/* Image Placeholder area */}
                <div className="h-48 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mt-auto">
                    {/* Repository Button */}
                    {project.source ? (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 rounded-full border border-gray-600 text-white text-sm font-medium hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span className="truncate">Repository</span>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    ) : (
                      <button className="flex-1 px-4 py-2.5 rounded-full border border-gray-700 text-gray-500 text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2">
                        <span>Private</span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </button>
                    )}

                    {/* Demo Button */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm font-medium hover:shadow-neon hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span className="truncate">Demo</span>
                      <FontAwesomeIcon icon={faPlay} className="text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
