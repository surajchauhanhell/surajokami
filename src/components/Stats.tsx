import { Users, Briefcase, Award, Coffee } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Briefcase,
      number: '2450',
      label: 'Project Completed',
    },
    {
      icon: Users,
      number: '1085',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      number: '07',
      label: 'Years Experience',
    },
    {
      icon: Coffee,
      number: '2790',
      label: 'Cups of Coffee',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
