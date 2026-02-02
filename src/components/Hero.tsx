import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
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
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 md:pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-purple/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 flex flex-col items-start"
          >
            <h2 className="text-neon-purple font-display text-lg tracking-wider mb-2">Hello World!</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 font-display leading-tight">
              Hi, I'm <br />
              <span className="text-white text-glow">Suraj</span>
            </h1>

            <div className="text-xl sm:text-2xl text-gray-400 mb-8 h-8 flex items-center">
              <span className="mr-2">I am a</span>
              <span ref={typedRef} className="text-neon-purple font-semibold"></span>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Crafting premium, user-centric and performance-friendly websites and apps with passion and precision.
            </p>

            <div className="flex flex-col gap-4 mb-10 items-start">
              <div className="flex gap-4 w-full sm:w-auto">
                <button
                  onClick={scrollToContact}
                  className="flex-1 sm:flex-none px-8 py-3 bg-neon-purple text-white rounded-full font-semibold hover:bg-neon-pink hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1 text-center justify-center flex"
                >
                  Let's Talk!
                </button>

                <a
                  href="https://drive.google.com/file/d/1sxyeyFzJ79c_UcLqoruUheyqSM3rexb7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-3 border border-neon-purple text-white rounded-full font-semibold hover:bg-neon-purple/10 hover:shadow-neon transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>Download CV</span>
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>

              <div className="flex gap-4 items-center justify-start w-full sm:w-auto">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-neon-purple hover:text-neon-purple text-gray-400 transition-all duration-300 text-lg"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
              {/* Circular glow behind */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-neon-purple to-neon-pink blur-[50px] opacity-60 animate-pulse"></div>

              {/* Image Container with Neo-morphism esque border */}
              <div className="relative w-full h-full rounded-full p-2 border-2 border-white/10 glass-card">
                <img
                  src={itsmeImage}
                  alt="Suraj"
                  className="w-full h-full rounded-full object-cover border-4 border-neon-purple/30"
                  loading="lazy"
                />

                {/* Floating Icons/badges logic can go here if needed, keeping simple for now */}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
