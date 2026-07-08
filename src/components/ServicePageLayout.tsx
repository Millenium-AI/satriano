import { ReactNode, useEffect } from 'react';
import TopStrip from './TopStrip';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ServicePageLayout({
  title,
  description,
  children,
}: ServicePageLayoutProps) {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [title]);

  return (
    <>
      <TopStrip />
      <div className="min-h-screen bg-cream">
        <div
          className="container mx-auto px-4"
          style={{ padding: 'clamp(2rem, 3vw, 2.5rem) 1rem' }}
        >
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
