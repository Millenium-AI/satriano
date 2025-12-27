import { Link } from 'react-router-dom';

export default function DockRepair() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="text-[#800020] hover:underline mb-4 inline-block">← Back to Services</Link>
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
  );
}
