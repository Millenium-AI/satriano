import { useState, useRef } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append("access_key", "6d27bc36-dc20-4fc1-a03e-294b4e40ffa7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! We'll contact you shortly.");
        setFormData({ name: '', email: '', phone: '', message: '', source: '' });
        
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      setResult("Connection error. Please try again or call us at 727-954-0041.");
    }
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
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-montserrat font-bold text-burgundy mb-4">
            Get Your
            <span className="block text-gold">
              Free Estimate
            </span>
          </h1>
          <h2 className="text-xl text-burgundy max-w-3xl mx-auto mt-6">
            Contact us today for a no-cost, no-obligation consultation!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Why Choose Satriano Marine?</h2>
                <p className="text-lg text-burgundy leading-relaxed mb-4">
                  We provide free estimates with no obligation. Our team delivers unmatched customer service for all your dock and boat lift needs.
                </p>
                <p className="text-lg text-burgundy leading-relaxed mb-4">
                  Whether you're looking for a new dock or boat lift, or need advice, repair, or maintenance on existing structures, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="tel:727-954-0041" 
                  className="flex items-start gap-4 p-6 bg-cream rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold active:scale-95 touch-manipulation"
                >
                  <div className="w-12 h-12 rounded-lg bg-burgundy flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Phone</h4>
                    <span className="text-burgundy hover:text-gold text-lg font-semibold">
                      727-954-0041
                    </span>
                  </div>
                </a>

                <a 
                  href="mailto:sal@satrianomarine.com"
                  className="flex items-start gap-4 p-6 bg-cream rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold active:scale-95 touch-manipulation"
                >
                  <div className="w-12 h-12 rounded-lg bg-burgundy flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy mb-1">Email</h4>
                    <span className="text-burgundy hover:text-gold break-all">
                      sal@satrianomarine.com
                    </span>
                  </div>
                </a>

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
                  <label htmlFor="name" className="block text-sm font-semibold text-burgundy mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-burgundy mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-burgundy mb-2">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none text-base"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-burgundy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none resize-none text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-semibold text-burgundy mb-2">
                    How did you find us?
                  </label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gold focus:border-burgundy focus:ring-2 focus:ring-gold/20 transition-all outline-none text-base appearance-none bg-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
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

                {result && (
                  <div 
                    role="alert"
                    aria-live="polite"
                    className={`p-4 rounded-lg text-center font-semibold text-base ${
                      result.includes("Thank you") 
                        ? "bg-green-100 text-green-800 border border-green-300" 
                        : result.includes("Sending") 
                        ? "bg-blue-100 text-blue-800 border border-blue-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {result}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={result === "Sending..."}
                  className="w-full px-8 py-4 bg-burgundy text-cream rounded-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 touch-manipulation"
                >
                  <span>{result === "Sending..." ? "Sending..." : "Send Message"}</span>
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
