import ServicePageLayout from '../components/ServicePageLayout';

export default function BoatLiftInstallation() {
  return (
    <ServicePageLayout
      title="New Boat Lift Design & Installation"
      description="Professional boat lift installation to protect your investment and simplify vessel maintenance."
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Our Installation Process</h2>
        <ul className="space-y-3 text-burgundy">
          <li>• Vessel measurement and weight assessment</li>
          <li>• Lift system selection and design</li>
          <li>• Permit coordination</li>
          <li>• Professional installation</li>
          <li>• Testing and operator training</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Lift Types We Install</h2>
        <p className="text-burgundy">
          We install 4-post lifts, vertical lifts, floating lifts, and PWC lifts. All systems are customized for your vessel and waterfront conditions.
        </p>
      </div>
    </ServicePageLayout>
  );
}
