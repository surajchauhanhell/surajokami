import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Anderson',
      position: 'CEO, TechSolutions Inc.',
      text: "Suraj is an exceptional developer who delivered our mobile app ahead of schedule. His attention to detail and technical expertise are outstanding. The app he built has exceeded our expectations and our users love it!",
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Dr. Sarah Williams',
      position: 'Director, HealthConnect',
      text: "Working with Suraj was a pleasure. He quickly understood our requirements and delivered a robust healthcare platform that our staff finds intuitive and efficient. His professionalism and commitment to quality are remarkable.",
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Michael Chen',
      position: 'Founder, ShopNow',
      text: "Suraj's expertise in Flutter allowed us to launch our e-commerce platform on both iOS and Android simultaneously. His code quality is excellent, and he provided valuable insights throughout the development process. Highly recommended!",
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full shadow-neon"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass p-8 rounded-2xl relative mt-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-neon-purple rounded-full flex items-center justify-center shadow-lg text-white">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>

              <p className="text-gray-300 mb-8 pt-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-neon-purple/50"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neon-purple">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
