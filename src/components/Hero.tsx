import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import itsmeImage from '../Assets/itsme.jpg';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Android Developer',
        'Flutter Developer',
        'Web Developer',
        'Full Stack Developer',
        'Content Creator',
        'Entrepreneur'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/surajchauhanhell', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/suraj', label: 'LinkedIn' },
    { icon: faInstagram, url: 'https://instagram.com/suraj', label: 'Instagram' },
    { icon: faTwitter, url: 'https://twitter.com/suraj', label: 'Twitter' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Suraj <span className="inline-block animate-wave">👋</span>
            </h1>

            <div className="text-2xl md:text-3xl mb-6 h-12">
              <span ref={typedRef}></span>
            </div>

            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Turning innovative ideas into real-world applications that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </button>
              <a
                href="#"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img
                src={itsmeImage}
                alt="Suraj"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
