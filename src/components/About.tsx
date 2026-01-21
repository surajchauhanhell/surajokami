import itsmeImage from '../Assets/itsme.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const services = [
    { icon: faCode, label: 'Web Application Development' },
    { icon: faMobileAlt, label: 'Mobile Application Development' },
    { icon: faLightbulb, label: 'Problem Solving' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Circular glow with different color for About */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-neon-purple to-blue-500 blur-[40px] opacity-40 animate-pulse"></div>

              <div className="relative w-full h-full rounded-full p-1.5 border border-white/10 glass">
                <img
                  src={itsmeImage}
                  alt="Suraj"
                  className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h3 className="text-xl text-neon-purple font-display tracking-widest mb-2">
                I'm Suraj Chauhan
              </h3>
              <h4 className="text-white/80 text-lg leading-relaxed mb-6">
                Software Engineer, Content Creator, and Freelance Developer.
                I create universe-grade collaborative applications using Flutter, React Native, and React.
              </h4>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.label} className="glass p-4 rounded-xl flex items-center space-x-4 border border-white/5 hover:border-neon-purple/50 transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-all duration-300">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
