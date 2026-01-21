import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*New Contact Form Submission*\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918446294958?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setStatus('Message sent successfully! WhatsApp window is opening...');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-white mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full shadow-neon mb-8"></div>
        </div>

        <div className="glass p-8 rounded-2xl border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-gray-400 text-sm ml-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(189,0,255,0.3)] text-white transition-all duration-300"
              />
            </div>

            <div className="space-y-1">
              <label className="text-gray-400 text-sm ml-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(189,0,255,0.3)] text-white transition-all duration-300"
              />
            </div>

            <div className="space-y-1">
              <label className="text-gray-400 text-sm ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(189,0,255,0.3)] text-white transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-neon-purple text-white rounded-lg font-semibold hover:bg-neon-pink hover:shadow-neon transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send a message</span>
              {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
            </button>

            {status && (
              <p className="text-green-400 text-center text-sm mt-2">
                {status}
              </p>
            )}
          </form>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          {[/* Icons can be added here if needed like bottom of form in reference */].map((item, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-white/20"></div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;
