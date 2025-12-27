import { ArrowLeft } from 'lucide-react';

export default function BoatLiftRepair() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
      <a
          href="/#services"
          className="inline-flex items-center gap-2 bg-white text-[#800020] px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#800020] hover:bg-[#800020] hover:text-white transition-all group mb-6"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </a>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Boat Lift Repair & Maintenance</h1>
        <p className="text-lg text-slate-600 mb-8">
          Complete boat lift service including motor replacement, cable repair, adjustments, and preventative maintenance.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Repairs</h2>
          <ul className="space-y-3 text-slate-600">
            <li>• Motor replacement and repair</li>
            <li>• Cable replacement</li>
            <li>• Pulley system repair</li>
            <li>• Leveling adjustments</li>
            <li>• Electrical troubleshooting</li>
            <li>• Bunk board replacement</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Preventative Maintenance</h2>
          <p className="text-slate-600">
            Annual maintenance includes cable inspection, motor servicing, electrical system checks, and lubrication of all moving parts.
          </p>
        </div>
      </div>
    </div>
  );
}
