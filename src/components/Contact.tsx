import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '', source: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4">
            Get Your
            <span className="block text-gold">
              Free Estimate
            </span>
          </h2>
          <p className="text-xl text-burgundy max-w-3xl mx-auto mt-6">
            Contact us today for a no-cost, no-obligation consultation!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-burgundy mb-4">Why Choose Satriano Marine?</h3>
                <p className="text-lg text-burgundy leading-relaxed mb-4">
                  We provide free estimates with no obligation. Our team delivers unmatched customer service for all your dock and boat lift needs.
                </p>
                <p className="text-lg text-burgundy leading-relaxed mb-4">
                  Whether you're looking for a new dock or boat lift, or need advice, repair, or maintenance on existing structures, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-cream rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold">
                  <div className="w-12 h-12 rounded-lg bg-burgundy flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Phone</h4>
                    <a href="tel:727-954-0041" className="text-burgundy hover:text-gold text-lg font-semibold">
                      727-954-0041
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-cream rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold">
                  <div className="w-12 h-12 rounded-lg bg-burgundy flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Email</h4>
                    <a href="mailto:sal@satrianomarine.com" className="text-burgundy hover:text-gold">
                      sal@satrianomarine.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-cream rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold">
                  <div className="w-12 h-12 rounded-lg bg-burgundy flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Location</h4>
                    <p className="text-burgundy">North Redington Beach, Florida</p>
                    <p className="text-sm text-burgundy mt-1">Serving All of Pinellas County</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="bg-cream rounded-2xl shadow-2xl p-8 border border-gold">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-burgundy mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-burgundy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-burgundy mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-burgundy mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-burgundy mb-2">
                    How did you find us?
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                  >
                    <option value="">Please select one</option>
                    <option value="Yard Sign">Yard Sign</option>
                    <option value="Truck/Barge">Truck/Barge</option>
                    <option value="Google">Google</option>
                    <option value="Local Ad">Local Ad</option>
                    <option value="Post Card Referral">Post Card Referral</option>
                    <option value="Referral">Referral</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-burgundy text-cream rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
