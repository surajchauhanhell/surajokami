import { Code2, Palette, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with Flutter and native Android development.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that enhance user experience.',
    },
    {
      icon: Globe,
      title: 'Web Solutions',
      description: 'Responsive websites and web platforms optimized for performance and SEO.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-black dark:hover:border-white"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-gray-900 dark:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
