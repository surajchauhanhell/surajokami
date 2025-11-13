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
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/surajdigitalcreator?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: faInstagram, url: 'https://www.instagram.com/surajokami?igsh=M3JyZHEyNWI1MGQ4', label: 'Instagram' },
    { icon: faTwitter, url: 'https://x.com/Xtrade_suraj?s=09', label: 'Twitter' },
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm Suraj <span className="inline-block animate-wave">👋</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl mb-6 h-12 min-h-12">
              <span ref={typedRef}></span>
            </div>

            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              Turning innovative ideas into real-world applications that make a difference.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl touch-target"
              >
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/1sxyeyFzJ79c_UcLqoruUheyqSM3rexb7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 active:bg-gray-200 active:text-blue-600 transform hover:scale-105 active:scale-95 transition-all duration-300 touch-target text-center"
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-blue-600 active:bg-blue-200 active:text-blue-700 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-target"
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
            className="flex justify-center mt-8 md:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img
                src={itsmeImage}
                alt="Suraj"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover border-4 sm:border-6 md:border-8 border-white/20 shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
