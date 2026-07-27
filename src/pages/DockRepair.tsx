import ServicePageLayout from '../components/ServicePageLayout';

export default function DockRepair() {
  const showGallery = false;

  const repairs = [
    'Decking replacement and repair.',
    'Piling and structural reinforcement.',
    'Hardware and fastener replacement.',
    'Electrical and lighting repairs.',
    'Storm damage restoration.',
    'Walkway, ramp, and access repairs.',
  ];

  const maintenance = [
    'Seasonal dock inspections.',
    'Preventive maintenance planning.',
    'Cleaning and upkeep.',
    'Early identification of wear and damage.',
  ];

  const steps = [
    'Inspect the dock and identify problem areas.',
    'Recommend practical repair options.',
    'Complete repairs with durable marine-grade materials.',
    'Help you stay ahead of future issues with routine maintenance.',
  ];

  return (
    <ServicePageLayout
      title="Dock Repair & Maintenance"
      description="Expert dock repair and maintenance services to keep your waterfront structure safe, functional, and ready for long-term use."
    >
      <div className="space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_340px] gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
              <div className="inline-flex items-center rounded-full bg-gold/10 text-burgundy px-4 py-2 text-sm font-semibold mb-4">
                Repair and maintenance
              </div>

              <h2 className="text-3xl md:text-4xl font-lato font-bold text-burgundy mb-4 leading-tight">
                Keep your dock safe, solid, and ready to use
              </h2>

              <p className="text-burgundy/85 leading-relaxed max-w-3xl mb-6">
                Docks take constant wear from weather, water, and everyday use. We repair
                damaged or aging structures and help prevent small issues from becoming
                larger repairs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-cream/40 border border-gold p-4">
                  <p className="text-burgundy font-semibold leading-relaxed">
                    Repairs focused on safety and function.
                  </p>
                </div>
                <div className="rounded-xl bg-cream/40 border border-gold p-4">
                  <p className="text-burgundy font-semibold leading-relaxed">
                    Maintenance that helps protect your investment.
                  </p>
                </div>
                <div className="rounded-xl bg-cream/40 border border-gold p-4">
                  <p className="text-burgundy font-semibold leading-relaxed">
                    Clear recommendations for what needs attention now.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gold">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">
                    Common repairs
                  </h2>

                  <div className="space-y-3">
                    {repairs.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-burgundy flex-shrink-0" />
                        <p className="text-burgundy leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">
                    Maintenance programs
                  </h2>

                  <p className="text-burgundy/85 leading-relaxed mb-4">
                    Regular maintenance helps extend the life of your dock and catch
                    issues early.
                  </p>

                  <div className="space-y-3">
                    {maintenance.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-burgundy flex-shrink-0" />
                        <p className="text-burgundy leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream/50 p-6 rounded-2xl border border-gold">
              <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">
                Our approach
              </h2>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-burgundy text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-burgundy leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-6">
            {showGallery && (
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gold">
                <h2 className="text-2xl font-lato font-bold text-burgundy mb-4 px-2">
                  Repair gallery
                </h2>
              </div>
            )}

            <div className="bg-burgundy text-white rounded-2xl shadow-xl p-7">
              <h3 className="text-2xl font-lato font-bold mb-3">
                Need dock repairs?
              </h3>

              <p className="text-white/85 leading-relaxed mb-5">
                Tell us what is going on, and we will help you determine the right repair
                or maintenance plan for your dock.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gold text-burgundy font-bold px-6 py-3 hover:bg-gold/90 transition-colors"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
}