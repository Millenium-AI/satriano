import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function DockDesign() {
  return (
    <>
      <TopStrip />
      <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-10">
      <a
          href="/#services"
          className="inline-flex items-center gap-2 bg-white text-burgundy px-4 py-2 rounded-lg text-sm font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all group mb-6"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </a>
        <h1 className="text-4xl md:text-5xl font-bold text-burgundy mb-6">New Dock Design & Construction</h1>
        <p className="text-lg text-burgundy mb-8">
          Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
          <h2 className="text-2xl font-bold text-burgundy mb-4">Our Design Process</h2>
          <ul className="space-y-3 text-burgundy">
            <li>• Site inspection and assessment</li>
            <li>• Custom design based on your needs</li>
            <li>• Permit acquisition and approval</li>
            <li>• Professional installation</li>
            <li>• Final inspection and warranty</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
          <h2 className="text-2xl font-bold text-burgundy mb-4">Materials We Use</h2>
          <p className="text-burgundy">
            We specialize in pressure-treated wood, composite decking, aluminum frames, and marine-grade hardware to ensure longevity and durability.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
