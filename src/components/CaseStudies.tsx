import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  const projects = [
    {
      tag: 'WEB DESIGN',
      title: 'Web Design for fintech payment solutions.',
      description: 'PortBuild - Professional portfolio builder with no coding required',
      link: 'https://portbuild-mauve.vercel.app/',
      bgColor: 'bg-gray-100 dark:bg-gray-800',
    },
    {
      tag: 'STARTUP',
      title: 'Minimal Agency website for startups business.',
      description: 'Trendora - Modern e-commerce platform with elegant design',
      link: 'https://trendora-shop-elegance.vercel.app/',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
    {
      tag: 'SaaS PROJECT',
      title: 'Saas web and app design project.',
      description: 'OneXpertSheet - Firebase integrated Flutter app with Excel API',
      link: 'https://drive.google.com/file/d/1ynXTbUcDppeftjsAshEiGOG_9GGtIeg1/view',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            CASE STUDY
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Showcasing my recent work and project highlights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgColor} p-8 md:p-12 rounded-3xl hover:scale-[1.02] transition-all duration-300 group`}
            >
              <span className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full mb-6">
                {project.tag}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-900 dark:text-white font-semibold group-hover:underline"
              >
                <span>See Details</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl hover:scale-[1.02] transition-all duration-300 group">
            <span className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full mb-6">
              AI/ML PROJECT
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              AI-powered React application.
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              ShadowOkami - Innovative AI/ML solution with modern UI
            </p>

            <a
              href="https://shadowokami.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-900 dark:text-white font-semibold group-hover:underline"
            >
              <span>See Details</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-8 md:p-12 rounded-3xl hover:scale-[1.02] transition-all duration-300 group">
            <span className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full mb-6">
              SECURITY
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Deepfake detection solution.
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              DeepPath - Advanced AI/ML for identifying manipulated media
            </p>

            <a
              href="https://deeppathokami.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-900 dark:text-white font-semibold group-hover:underline"
            >
              <span>See Details</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
