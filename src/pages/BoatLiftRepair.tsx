import ServicePageLayout from '../components/ServicePageLayout';

export default function BoatLiftRepair() {
  const commonRepairs = [
    { name: 'Motor & Gearbox', desc: 'Repair or replacement' },
    { name: 'Cables & Pulleys', desc: 'System service' },
    { name: 'Electrical', desc: 'Troubleshooting & repair' },
    { name: 'Structural', desc: 'Reinforcement & bracing' },
    { name: 'Control Systems', desc: 'Upgrades & repair' },
    { name: 'Corrosion', desc: 'Treatment & protection' },
  ];

  const whenToCall = [
    'Lift is slow or not raising smoothly',
    'Controls don\'t respond consistently',
    'Visible rust or structural damage',
    'Motor sounds strained or noisy',
    'Cable or pulley damage',
    'Time for seasonal maintenance',
  ];

  const benefits = [
    'Extend the life of your boat lift',
    'Prevent costly emergency breakdowns',
    'Ensure safe, reliable operation',
  ];

  const processSteps = [
    'Comprehensive inspection and diagnosis',
    'Clear explanation of what needs attention',
    'Repair or maintenance with quality materials',
    'Testing and performance verification',
    'Documentation and maintenance records',
  ];

  return (
    <ServicePageLayout
      title="Boat Lift Repair & Maintenance"
      description="Expert repair and maintenance services to keep your boat lift operating safely, reliably, and ready for everyday use."
    >
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
          <div className="inline-flex items-center rounded-full bg-gold/10 text-burgundy px-4 py-2 text-sm font-semibold mb-4">
            Repair and maintenance
          </div>

          <h2 className="text-3xl md:text-4xl font-lato font-bold text-burgundy mb-4 leading-tight">
            Keep your boat lift working when you need it
          </h2>

          <p className="text-burgundy/85 leading-relaxed mb-6 max-w-3xl">
            Boat lifts endure constant exposure to water, weather, and mechanical stress. When something goes wrong, we handle everything from routine maintenance to emergency repairs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-cream/40 border border-gold p-4"
              >
                <p className="text-burgundy font-semibold leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Repairs Grid */}
        <section>
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Common repairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonRepairs.map((repair) => (
              <div
                key={repair.name}
                className="bg-white p-5 rounded-xl shadow border border-gold hover:shadow-md transition"
              >
                <h3 className="font-bold text-burgundy mb-1">{repair.name}</h3>
                <p className="text-burgundy/75 text-sm">{repair.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Call Grid */}
        <section>
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Signs you need service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whenToCall.map((sign) => (
              <div
                key={sign}
                className="bg-cream/40 border-2 border-gold p-4 rounded-xl"
              >
                <p className="text-burgundy text-sm leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section>
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Our process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-white text-sm font-bold mb-3 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-burgundy text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - Prominent */}
        <section className="bg-burgundy text-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-lato font-bold mb-4">
              Lift not working right?
            </h3>

            <p className="text-white/85 leading-relaxed mb-6">
              Tell us what's happening, and we'll help you diagnose the issue and get your lift back in working order.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gold text-burgundy font-bold px-8 py-4 hover:bg-gold/90 transition-colors text-lg"
            >
              Request Service Now
            </a>
          </div>
        </section>

        {/* Why Maintenance Matters */}
        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-6">Why preventive maintenance matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-burgundy leading-relaxed">
                Motors wear, cables stretch, electrical connections corrode. Early detection means inexpensive, straightforward fixes.
              </p>
            </div>

            <div>
              <p className="text-burgundy leading-relaxed">
                Emergency repairs are costly and disruptive. Regular maintenance keeps your lift smooth and reliable every time.
              </p>
            </div>

            <div>
              <p className="text-burgundy leading-relaxed">
                We'll set up a maintenance schedule that fits your use. Seasonal tuning or annual service plans—we keep you covered.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
}
