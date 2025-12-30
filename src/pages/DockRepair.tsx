import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function DockRepair() {
  return (
    <>
      <TopStrip />
      <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
      <a
          href="/#services"
          className="inline-flex items-center gap-2 bg-white text-[#800020] px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#800020] hover:bg-[#800020] hover:text-white transition-all group mb-6"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </a>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dock Repair & Maintenance</h1>
        <p className="text-lg text-slate-600 mb-8">
          Expert repair and maintenance services to keep your dock safe and functional. We fix damage from storms, age, and wear.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Repairs</h2>
          <ul className="space-y-3 text-slate-600">
            <li>• Decking board replacement</li>
            <li>• Piling repair and replacement</li>
            <li>• Hardware upgrades</li>
            <li>• Storm damage restoration</li>
            <li>• Structural reinforcement</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Maintenance Plans</h2>
          <p className="text-slate-600">
            Regular maintenance extends the life of your dock. We offer annual inspection and maintenance packages.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
