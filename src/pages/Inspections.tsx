import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function Inspections() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dock & Boat Lift Inspections</h1>
        <p className="text-lg text-slate-600 mb-8">
          Thorough inspections for buyers, sellers, and owners. Detailed reports on dock and boat lift integrity and safety.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Inspect</h2>
          <ul className="space-y-3 text-slate-600">
            <li>• Structural integrity of pilings and beams</li>
            <li>• Decking condition</li>
            <li>• Hardware and fasteners</li>
            <li>• Boat lift motors and cables</li>
            <li>• Electrical systems</li>
            <li>• Safety compliance</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Inspection Reports</h2>
          <p className="text-slate-600">
            Receive a comprehensive written report with photos, safety concerns, repair recommendations, and estimated costs within 48 hours.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
