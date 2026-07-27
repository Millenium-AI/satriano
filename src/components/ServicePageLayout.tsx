import { ReactNode, useEffect } from 'react';
import Header from './Header';

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
      <Header />
      <div className="min-h-screen bg-cream">
        <div
          className="container mx-auto px-4 sm:px-5 lg:px-6"
          style={{ paddingTop: 'clamp(2rem, 3vw, 2.75rem)', paddingBottom: 'clamp(3rem, 5vw, 4.5rem)' }}
        >
          <div className="mb-fluid-xl text-center">
            <h1
              className="font-montserrat font-bold text-burgundy tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.25rem, 3.5vw + 1rem, 3.5rem)', lineHeight: 1.08 }}
            >
              {title}
            </h1>

            <p
              className="mx-auto text-burgundy/85"
              style={{
                fontSize: 'clamp(1.05rem, 1vw + 0.8rem, 1.3rem)',
                lineHeight: 1.7,
                maxWidth: '56rem',
              }}
            >
              {description}
            </p>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}