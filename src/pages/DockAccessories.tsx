import { Link } from 'react-router-dom';

export default function Accessories() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="text-[#800020] hover:underline mb-4 inline-block">← Back to Services</Link>
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
  );
}
