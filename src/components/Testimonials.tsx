import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Anderson',
      position: 'CEO, TechSolutions Inc.',
      text: "Suraj is an exceptional developer who delivered our mobile app ahead of schedule. His attention to detail and technical expertise are outstanding. The app he built has exceeded our expectations and our users love it!",
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Dr. Sarah Williams',
      position: 'Director, HealthConnect',
      text: "Working with Suraj was a pleasure. He quickly understood our requirements and delivered a robust healthcare platform that our staff finds intuitive and efficient. His professionalism and commitment to quality are remarkable.",
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Michael Chen',
      position: 'Founder, ShopNow',
      text: "Suraj's expertise in Flutter allowed us to launch our e-commerce platform on both iOS and Android simultaneously. His code quality is excellent, and he provided valuable insights throughout the development process. Highly recommended!",
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative group"
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl"></div>

                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg -mt-8`}>
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-2xl" />
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
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
