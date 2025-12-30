import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function BoatLiftRepair() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-burgundy mb-6">Boat Lift Repair & Maintenance</h1>
        <p className="text-lg text-burgundy mb-8">
          Complete boat lift service including motor replacement, cable repair, adjustments, and preventative maintenance.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
          <h2 className="text-2xl font-bold text-burgundy mb-4">Common Repairs</h2>
          <ul className="space-y-3 text-burgundy">
            <li>• Motor replacement and repair</li>
            <li>• Cable replacement</li>
            <li>• Pulley system repair</li>
            <li>• Leveling adjustments</li>
            <li>• Electrical troubleshooting</li>
            <li>• Bunk board replacement</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
          <h2 className="text-2xl font-bold text-burgundy mb-4">Preventative Maintenance</h2>
          <p className="text-burgundy">
            Annual maintenance includes cable inspection, motor servicing, electrical system checks, and lubrication of all moving parts.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
