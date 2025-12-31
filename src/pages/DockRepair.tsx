import ServicePageLayout from '../components/ServicePageLayout';

export default function DockRepair() {
  return (
    <ServicePageLayout
      title="Dock Repair & Maintenance"
      description="Expert dock repair and maintenance services to keep your waterfront structure safe and functional year-round."
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Common Repairs</h2>
        <ul className="space-y-3 text-burgundy">
          <li>• Decking replacement and repair</li>
          <li>• Piling and support structure reinforcement</li>
          <li>• Hardware and fastener replacement</li>
          <li>• Electrical system repairs</li>
          <li>• Storm damage restoration</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Maintenance Programs</h2>
        <p className="text-burgundy">
          Regular maintenance extends the life of your dock. We offer seasonal inspections, cleaning, sealing, and preventive repairs.
        </p>
      </div>
    </ServicePageLayout>
  );
}
