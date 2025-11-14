import itsmeImage from '../Assets/itsme.jpg';

const About = () => {
  const details = [
    { label: 'Name', value: 'Suraj' },
    { label: 'Email', value: 'suraj.brahma.coder@gmail.com' },
    { label: 'Location', value: 'Maharashtra, India' },
    { label: 'Freelance', value: 'Available' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives my passion for technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={itsmeImage}
                alt="Suraj"
                className="relative w-full max-w-md rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Developer & Tech Enthusiast
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate developer and content creator with expertise in mobile and web development.
              With a strong foundation in Flutter, Android, and modern web technologies, I bring ideas to
              life through clean, efficient code and intuitive user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I love building applications that solve real-world problems and make people's lives easier.
              My journey in tech has been driven by curiosity and a constant desire to learn and grow. From
              creating mobile apps to developing web platforms, I enjoy every aspect of the development process.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy creating content, exploring new technologies, and contributing
              to the developer community. I believe in the power of technology to transform ideas into reality
              and am always excited to take on new challenges.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {details.map((detail) => (
                <div key={detail.label} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{detail.label}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{detail.value}</p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:opacity-90 transition-all duration-200 touch-target"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
