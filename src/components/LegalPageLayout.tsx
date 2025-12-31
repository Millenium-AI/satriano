import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import TopStrip from './TopStrip';

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <TopStrip />
      <section className="py-10 bg-cream min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-white text-burgundy px-6 py-3 rounded-lg font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </div>
          <h1 className="text-4xl font-bold text-burgundy mb-6">{title}</h1>
          {children}
        </div>
      </section>
    </>
  );
}
