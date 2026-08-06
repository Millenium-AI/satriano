import ServicePageLayout from '../components/ServicePageLayout';

export default function Inspections() {
  const inspectionScope = [
    { icon: '🏗️', title: 'Structural', desc: 'Integrity & stability' },
    { icon: '📍', title: 'Pilings', desc: 'Foundation conditions' },
    { icon: '⚡', title: 'Electrical', desc: 'Systems & safety' },
    { icon: '🔧', title: 'Hardware', desc: 'Fasteners & connections' },
    { icon: '🚪', title: 'Surfaces', desc: 'Decking & walkways' },
    { icon: '🦺', title: 'Safety', desc: 'Railings & barriers' },
    { icon: '🚤', title: 'Lift Systems', desc: 'Motors & controls' },
    { icon: '🔴', title: 'Corrosion', desc: 'Deterioration check' },
  ];

  const reportIncludes = [
    'Detailed written findings',
    'High-res photos & documentation',
    'Safety & condition assessment',
    'Prioritized repair recommendations',
    'Compliance status',
    'Maintenance plan',
  ];

  const benefits = [
    'Identify issues before they become emergencies',
    'Ensure safety for your family and guests',
    'Verify compliance with regulations',
  ];

  const whenToInspect = [
    'After storms or severe weather',
    'Before boating season starts',
    'Every 2–3 years routinely',
    'When buying property with dock/lift',
    'After major repair work',
  ];

  const processSteps = [
    'Schedule & site visit',
    'Hands-on inspection',
    'Documentation & photos',
    'Analysis & findings',
    'Report delivery',
    'Discussion & recommendations',
  ];

  return (
    <ServicePageLayout
      title="Dock & Boat Lift Inspections"
      description="Comprehensive professional inspections to ensure your dock and boat lift systems are safe, compliant, and built to last."
    >
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
          <div className="inline-flex items-center rounded-full bg-gold/10 text-burgundy px-4 py-2 text-sm font-semibold mb-4">
            Inspections and assessment
          </div>

          <h2 className="text-3xl md:text-4xl font-lato font-bold text-burgundy mb-4 leading-tight">
            Know the condition of your dock and lift
          </h2>

          <p className="text-burgundy/85 leading-relaxed mb-6 max-w-3xl">
            A professional inspection gives you peace of mind and early warning of problems. Whether assessing a new property, planning maintenance, or verifying compliance, we provide a thorough, documented evaluation.
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

        {/* Inspection Scope Grid */}
        <section>
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">What we inspect</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {inspectionScope.map((item) => (
              <div
                key={item.title}
                className="bg-white p-5 rounded-xl shadow border border-gold hover:shadow-md transition text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-burgundy text-sm mb-1">{item.title}</h3>
                <p className="text-burgundy/70 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Report Includes Grid */}
        <section>
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Your inspection report includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportIncludes.map((item) => (
              <div
                key={item}
                className="bg-cream/40 border-2 border-gold p-5 rounded-xl"
              >
                <p className="text-burgundy font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Inspect Grid */}
        <section>
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">When to schedule an inspection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whenToInspect.map((item) => (
              <div
                key={item}
                className="bg-white p-4 rounded-xl shadow border border-gold text-center"
              >
                <p className="text-burgundy text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section>
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Our process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
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
              Ready for an inspection?
            </h3>

            <p className="text-white/85 leading-relaxed mb-6">
              Get a clear picture of your dock and lift condition. Schedule a comprehensive professional inspection today.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gold text-burgundy font-bold px-8 py-4 hover:bg-gold/90 transition-colors text-lg"
            >
              Schedule Inspection Now
            </a>
          </div>
        </section>

        {/* Why Inspections Matter */}
        <section className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
          <h2 className="text-2xl font-lato font-bold text-burgundy mb-6">Why professional inspections matter</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-burgundy leading-relaxed">
                Docks and lifts are complex systems exposed to constant environmental stress. Problems hide beneath the surface.
              </p>
            </div>

            <div>
              <p className="text-burgundy leading-relaxed">
                Early detection means affordable fixes. We ensure compliance, protect insurance coverage, and document condition.
              </p>
            </div>

            <div>
              <p className="text-burgundy leading-relaxed">
                Homeowner, buyer, or property manager—a comprehensive inspection is one of the smartest investments you can make.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
}
