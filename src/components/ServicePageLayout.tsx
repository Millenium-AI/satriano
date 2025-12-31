import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleBackToServices = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <TopStrip />
      <div className="min-h-screen bg-cream">
        <div className="container mx-auto px-4 py-10">
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center gap-2 bg-white text-burgundy px-4 py-2 rounded-lg text-sm font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all group mb-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-burgundy mb-6">
            {title}
          </h1>
          <p className="text-lg text-burgundy mb-8">{description}</p>
          
          {children}
        </div>
      </div>
    </>
  );
}
