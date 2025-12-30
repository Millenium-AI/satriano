import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function Accessories() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dock & Boat Lift Accessories</h1>
        <p className="text-lg text-slate-600 mb-8">
          Wide selection of premium accessories to enhance your dock and boat lift including bumpers, cleats, ladders, and more.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Dock Accessories</h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Cleats and bumpers</li>
              <li>• Dock ladders</li>
              <li>• Solar lighting</li>
              <li>• Kayak racks</li>
              <li>• Fish cleaning stations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Boat Lift Accessories</h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Remote control systems</li>
              <li>• Canopy covers</li>
              <li>• Bunk boards and carpet</li>
              <li>• Guide poles</li>
              <li>• Lift levelers</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
