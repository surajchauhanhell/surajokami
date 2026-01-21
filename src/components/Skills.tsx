import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faDatabase, faPalette } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {

  const skillCategories = [
    {
      icon: faMobileAlt,
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 9 }, // Out of 10
        { name: 'Kotlin', level: 8 },
        { name: 'React Native', level: 7 },
      ]
    },
    {
      icon: faLaptopCode,
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 8 },
        { name: 'TypeScript', level: 8 },
        { name: 'Tailwind CSS', level: 9 },
      ]
    },
    {
      icon: faDatabase,
      title: 'Backend & Tools',
      skills: [
        { name: 'Firebase', level: 9 },
        { name: 'Node.js', level: 6 },
        { name: 'Git/GitHub', level: 8 },
      ]
    },
  ];

  /* 
   * Helper to render dots
   * activeCount: number of filled dots (0-10)
   */
  const renderDots = (activeCount: number) => {
    return (
      <div className="flex space-x-1.5 mt-2">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i < activeCount
                ? 'bg-neon-purple shadow-[0_0_8px_rgba(189,0,255,0.8)] scale-110'
                : 'bg-white/10 scale-90'
              }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            My Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={category.icon} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-neon-purple font-display">{skill.level}/10</span>
                    </div>
                    {renderDots(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
