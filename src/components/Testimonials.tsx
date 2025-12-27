import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  const testimonials = [
    {
      name: 'Jeffrey T.',
      text: 'Sal and Maria took over my boat lift installation and dock repair project from another dock company that could not complete the job. They were professional, responsive, and completed the work quickly and expertly.',
      rating: 5
    },
    {
      name: 'Linda M.',
      text: 'Sal was very easy to work with, was earlier on installation than he\'d estimated, and his crew was great! The boat lift works perfectly and looks beautiful. Highly recommend!',
      rating: 5
    },
    {
      name: 'Chris C.',
      text: 'Sal and his guys did a boat lift repair for me replacing a cable and re-spooling the three others. They were professional, on time, and the price was fair. Great experience overall.',
      rating: 5
    },
    {
      name: 'Norm Maia',
      text: 'Sal was excellent, on time, called ahead, gave us multiple quotes to explore all options. His work is top quality and his team is professional. We couldn\'t be happier!',
      rating: 5
    },
    {
      name: 'B Cuz',
      text: 'Sal and his team have been nothing but wonderful, professional, and helpful. They went above and beyond to make sure everything was perfect. True craftsmen!',
      rating: 5
    },
    {
      name: 'Tin Man',
      text: 'Sal and Maria were top notch. I wanted two tie poles placed with Slide Moor attachments and they delivered exactly what I needed at a fair price. Excellent service!',
      rating: 5
    },
    {
      name: 'Kevin W.',
      text: 'We had a phenomenal experience with Maria and Sal! They made our new boat lift and pilings possible, working within our budget and timeline. Professional from start to finish.',
      rating: 5
    },
    {
      name: 'Tom G. (Broadwater)',
      text: 'Highly recommend Satriano Marine Construction. They offered an option that no other competitor suggested, saving us money and providing a better solution. Expert advice!',
      rating: 5
    },
    {
      name: 'Richard M.',
      text: 'Great service and workmanship from Sal and the team at Satriano Marine Construction. They repaired my dock quickly and professionally after storm damage. Thank you!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-transparent to-slate-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D]">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-[#800020] opacity-20 mb-4" />
              
              <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#800020] to-[#A0522D] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-[#FFD700] max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#FFD700] text-[#FFD700]" />
            ))}
          </div>
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D] mb-2">
            5.0
          </div>
          <div className="text-slate-600 font-medium">
            Based on 100+ reviews
          </div>
        </div>
      </div>
    </section>
  );
}
