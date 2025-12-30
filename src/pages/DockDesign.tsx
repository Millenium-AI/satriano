import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function DockDesign() {
  return (
    <>
      <TopStrip />
      <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10">
      <a
          href="/#services"
          className="inline-flex items-center gap-2 bg-white text-[#800020] px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#800020] hover:bg-[#800020] hover:text-white transition-all group mb-6"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </a>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">New Dock Design & Construction</h1>
        <p className="text-lg text-slate-600 mb-8">
          Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Design Process</h2>
          <ul className="space-y-3 text-slate-600">
            <li>• Site inspection and assessment</li>
            <li>• Custom design based on your needs</li>
            <li>• Permit acquisition and approval</li>
            <li>• Professional installation</li>
            <li>• Final inspection and warranty</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Materials We Use</h2>
          <p className="text-slate-600">
            We specialize in pressure-treated wood, composite decking, aluminum frames, and marine-grade hardware to ensure longevity and durability.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
