import { Link } from 'react-router-dom';

export default function BoatLiftInstallation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="text-[#800020] hover:underline mb-4 inline-block">← Back to Services</Link>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">New Boat Lift Design & Installation</h1>
        <p className="text-lg text-slate-600 mb-8">
          Professional boat lift design and installation for vessels of all sizes. Quality motors, cables, and remote controls.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Boat Lift Types</h2>
          <ul className="space-y-3 text-slate-600">
            <li>• 4-post lifts (up to 30,000 lbs)</li>
            <li>• PWC lifts</li>
            <li>• Floating lifts</li>
            <li>• Hydraulic lifts</li>
            <li>• Cantilever lifts</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose a Boat Lift?</h2>
          <p className="text-slate-600 mb-4">
            Protect your investment from marine growth, hull damage, and constant water exposure. Boat lifts extend the life of your vessel and make launching effortless.
          </p>
        </div>
      </div>
    </div>
  );
}
