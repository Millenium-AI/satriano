import ServicePageLayout from '../components/ServicePageLayout';

export default function DockAccessories() {
  return (
    <ServicePageLayout
      title="Dock & Boat Lift Accessories"
      description="Enhance your dock and boat lift with quality accessories designed for functionality, safety, and convenience."
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold mb-8">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Popular Accessories</h2>
        <ul className="space-y-3 text-burgundy">
          <li>• Dock ladders and steps</li>
          <li>• Cleats, bumpers, and fenders</li>
          <li>• Lighting systems</li>
          <li>• Kayak and PWC lifts</li>
          <li>• Dock boxes and storage solutions</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
        <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Custom Solutions</h2>
        <p className="text-burgundy">
          We can source and install virtually any dock or boat lift accessory to meet your specific needs and enhance your waterfront experience.
        </p>
      </div>
    </ServicePageLayout>
  );
}
