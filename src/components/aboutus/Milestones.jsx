 const milestones = [
  { label: "Platform Launch", ach: "SmartCoach360 goes live for fitness professionals worldwide" },
  { label: "10,000+ Coaches", ach: "Coaches and trainers across the globe using the platform daily" },
  { label: "500,000+ Clients Managed", ach: "Half a million client success stories and counting" },
  { label: "40+ Features Released", ach: "Built entirely around real coaching workflows and feedback" },
  { label: "15+ Integrations", ach: "Connecting every corner of the fitness tech ecosystem" },
  { label: "Mobile App Launch", ach: "Full iOS and Android apps for coaches and clients" },
  { label: "Enterprise Tier Released", ach: "Multi-branch, SSO, and dedicated support for large organisations" },
];

export const Milestones = () => (
  <section className="bg-white py-24">
    <div className="max-w-[860px] mx-auto px-6">
      <div className="text-center mb-13">
        <span className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full bg-[#f0eaf3] text-[#7b4e87] border border-[#ddd4e4]">
          Our Journey
        </span>
        <h2 className="sc-fd text-[clamp(1.75rem,3vw,2.4rem)] text-[#1c0f1f] mt-3.5">Milestones So Far</h2>
      </div>

      <div className="overflow-hidden rounded-[20px] border border-[#e0d6e8]"
        style={{ boxShadow: "0 4px 32px rgba(46,26,50,.07),0 1px 4px rgba(46,26,50,.05)" }}>
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#f7f2fa] border-b border-[#e8e0ed]">
              <th className="text-left px-6 py-4 text-[0.63rem] font-bold uppercase tracking-[0.16em] text-[#a891b0]">Milestone</th>
              <th className="text-left px-6 py-4 text-[0.63rem] font-bold uppercase tracking-[0.16em] text-[#a891b0]">Achievement</th>
            </tr>
          </thead>
          <tbody>
            {milestones.map(({ label, ach }, i) => (
              <tr key={label} className={`border-b border-[#f0eaf3] last:border-b-0 transition-colors duration-200 hover:bg-[#faf7fc]`}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#a06cb0] flex-shrink-0" />
                    <span className="sc-fb text-[0.875rem] font-semibold text-[#2e1a32]">{label}</span>
                  </div>
                </td>
                <td className="px-6 py-4 sc-fb text-[0.875rem] text-[#8a7490]">{ach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);