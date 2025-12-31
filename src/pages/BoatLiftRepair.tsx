import ServicePageLayout from '../components/ServicePageLayout';

export default function BoatLiftRepair() {
  return (
    <ServicePageLayout
      title="Boat Lift Repair & Maintenance"
      description="Keep your boat lift operating safely and efficiently with our expert repair and maintenance services."
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Common Repairs</h2>
        <ul className="space-y-3 text-burgundy">
          <li>• Motor and gearbox repair/replacement</li>
          <li>• Cable and pulley system service</li>
          <li>• Electrical troubleshooting</li>
          <li>• Structural reinforcement</li>
          <li>• Control system upgrades</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Preventive Maintenance</h2>
        <p className="text-burgundy">
          Regular maintenance prevents costly breakdowns. We offer annual service plans including lubrication, inspection, and adjustment.
        </p>
      </div>
    </ServicePageLayout>
  );
}
