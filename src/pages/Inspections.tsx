import ServicePageLayout from '../components/ServicePageLayout';

export default function Inspections() {
  return (
    <ServicePageLayout
      title="Dock & Boat Lift Inspections"
      description="Comprehensive inspections to ensure safety, compliance, and longevity of your dock and boat lift systems."
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">What We Inspect</h2>
        <ul className="space-y-3 text-burgundy">
          <li>• Structural integrity and stability</li>
          <li>• Electrical systems and safety</li>
          <li>• Hardware and fastener condition</li>
          <li>• Decking and walking surfaces</li>
          <li>• Regulatory compliance</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Inspection Reports</h2>
        <p className="text-burgundy">
          You'll receive a detailed written report with photos, findings, and recommendations for any necessary repairs or maintenance.
        </p>
      </div>
    </ServicePageLayout>
  );
}
