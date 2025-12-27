import { Link } from 'react-router-dom';

export default function DockDesign() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="text-[#800020] hover:underline mb-4 inline-block">← Back to Services</Link>
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
  );
}
