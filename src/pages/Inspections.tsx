import { Link } from 'react-router-dom';

export default function Inspections() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="text-[#800020] hover:underline mb-4 inline-block">← Back to Services</Link>
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
  );
}
