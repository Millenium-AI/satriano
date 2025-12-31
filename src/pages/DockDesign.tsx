import ServicePageLayout from '../components/ServicePageLayout';

export default function DockDesign() {
  return (
    <ServicePageLayout
      title="New Dock Design & Construction"
      description="Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion."
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Our Design Process</h2>
        <ul className="space-y-3 text-burgundy">
          <li>• Site inspection and assessment</li>
          <li>• Custom design based on your needs</li>
          <li>• Permit acquisition and approval</li>
          <li>• Professional installation</li>
          <li>• Final inspection and warranty</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Materials We Use</h2>
        <p className="text-burgundy">
          We specialize in pressure-treated wood, composite decking, aluminum frames, and marine-grade hardware to ensure longevity and durability.
        </p>
      </div>
    </ServicePageLayout>
  );
}
