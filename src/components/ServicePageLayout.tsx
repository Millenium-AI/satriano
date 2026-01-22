import { ReactNode, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopStrip from './TopStrip';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const DESKTOP_BREAKPOINT = 1400;

export default function ServicePageLayout({
  title,
  description,
  children,
}: ServicePageLayoutProps) {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToServices = () => {
    const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;

    navigate('/', { replace: true });

    setTimeout(() => {
      const targetSection = isDesktop ? 'services' : 'about';
      const section = document.getElementById(targetSection);

      if (section) {
        const html = document.documentElement;
        const previousBehavior = html.style.scrollBehavior;

        html.style.scrollBehavior = 'auto';
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'auto',
        });
        html.style.scrollBehavior = previousBehavior;
      }
    }, 150);
  };

  return (
    <>
      <TopStrip />
      <div className="min-h-screen bg-cream">
        <div 
          className="container mx-auto px-4"
          style={{ padding: 'clamp(2rem, 3vw, 2.5rem) 1rem' }}
        >
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center bg-white text-burgundy rounded-lg font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all group mb-fluid-lg"
            style={{
              gap: 'clamp(0.4rem, 0.8vw, 0.5rem)',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
              fontSize: 'clamp(0.8rem, 1vw + 0.4rem, 0.95rem)',
            }}
          >
            <ArrowLeft 
              className="group-hover:-translate-x-1 transition-transform"
              style={{
                width: 'clamp(0.9rem, 1.2vw, 1rem)',
                height: 'clamp(0.9rem, 1.2vw, 1rem)',
              }}
            />
            Back to Services
          </button>

          <h1 
            className="font-montserrat font-bold text-burgundy mb-fluid-lg"
            style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 3rem)' }}
          >
            {title}
          </h1>

          <p 
            className="text-burgundy mb-fluid-xl"
            style={{ fontSize: 'clamp(1rem, 1.2vw + 0.6rem, 1.25rem)' }}
          >
            {description}
          </p>

          {children}
        </div>
      </div>
    </>
  );
}
