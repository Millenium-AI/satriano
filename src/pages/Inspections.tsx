import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function Inspections() {
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
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-burgundy mb-6">Dock & Boat Lift Inspections</h1>
        <p className="text-lg text-burgundy mb-8">
          Thorough inspections for buyers, sellers, and owners. Detailed reports on dock and boat lift integrity and safety.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">What We Inspect</h2>
          <ul className="space-y-3 text-burgundy">
            <li>• Structural integrity of pilings and beams</li>
            <li>• Decking condition</li>
            <li>• Hardware and fasteners</li>
            <li>• Boat lift motors and cables</li>
            <li>• Electrical systems</li>
            <li>• Safety compliance</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Inspection Reports</h2>
          <p className="text-burgundy">
            Receive a comprehensive written report with photos, safety concerns, repair recommendations, and estimated costs within 48 hours.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
