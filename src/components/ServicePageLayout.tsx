import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopStrip from './TopStrip';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const DESKTOP_BREAKPOINT = 1400; // Matches your new desktop: breakpoint

export default function ServicePageLayout({
  title,
  description,
  children,
}: ServicePageLayoutProps) {
  const navigate = useNavigate();

  const handleBackToServices = () => {
    const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;

    navigate('/', { replace: true });

    setTimeout(() => {
      // Desktop goes to services section, mobile/tablet goes to about section
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
      <div className="min-h-screen bg-gradient-to-b from-cream to-white">
        <div
          className="container mx-auto px-4"
          style={{ padding: 'clamp(2rem, 4vw, 3rem) 1rem' }}
        >
          {/* Back Button */}
          <button
            onClick={handleBackToServices}
            className="flex items-center text-burgundy hover:text-gold transition-colors mb-fluid-xl font-medium"
            style={{
              gap: 'clamp(0.4rem, 0.8vw, 0.5rem)',
              fontSize: 'clamp(0.9rem, 1vw + 0.5rem, 1.1rem)',
            }}
          >
            <ArrowLeft
              style={{
                width: 'clamp(1rem, 1.5vw, 1.25rem)',
                height: 'clamp(1rem, 1.5vw, 1.25rem)',
              }}
            />
            Back to Services
          </button>

          {/* Page Title */}
          <div className="text-center mb-fluid-2xl">
            <h1
              className="font-bold text-burgundy mb-fluid-md"
              style={{ fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)' }}
            >
              {title}
            </h1>
            <div
              className="h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy mx-auto"
              style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
            />
          </div>

          {/* Description */}
          <p
            className="text-burgundy/90 leading-relaxed text-center max-w-3xl mx-auto mb-fluid-2xl"
            style={{ fontSize: 'clamp(1rem, 1.2vw + 0.6rem, 1.25rem)' }}
          >
            {description}
          </p>

          {/* Service-specific content */}
          {children}
        </div>
      </div>
    </>
  );
}
