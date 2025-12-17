export default function Founders() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-wrapper space-y-8 lg:space-y-12">
        <h2 className="secondary-title">Founders</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative aspect-3/4 bg-accent/50 rounded-md overflow-hidden"
            >
              <div className="absolute inset-0 p-4 flex items-end">
                <div className="bg-muted px-4 py-2 rounded w-full">
                  <h6 className="font-semibold">{founder.name}</h6>
                  <span className="block text-xs font-medium">
                    {founder.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const founders = [
  {
    name: "Baba Hazuria",
    position: "CEO & Co-Founder",
    profile: [
      "Baba has led strategy, research, and commercial teams as a former CSO, CMO, and Sales & Marketing Director. His experience spans agency consulting, consumer insight work, and large-scale commercial operations across Southeast Asia.",
      "He drives Obrol's vision and category creation, bringing strong founder market fit shaped by years of understanding customers, field teams, and enterprise decision-making.",
    ],
  },
  {
    name: "Avineet Hazuria",
    position: "COO & Co-Founder",
    profile: [
      "Baba has led strategy, research, and commercial teams as a former CSO, CMO, and Sales & Marketing Director. His experience spans agency consulting, consumer insight work, and large-scale commercial operations across Southeast Asia.",
      "He drives Obrol's vision and category creation, bringing strong founder market fit shaped by years of understanding customers, field teams, and enterprise decision-making.",
    ],
  },
  {
    name: "Dimas Harya",
    position: "CTO, Founding Team",
    profile: [
      "Baba has led strategy, research, and commercial teams as a former CSO, CMO, and Sales & Marketing Director. His experience spans agency consulting, consumer insight work, and large-scale commercial operations across Southeast Asia.",
      "He drives Obrol's vision and category creation, bringing strong founder market fit shaped by years of understanding customers, field teams, and enterprise decision-making.",
    ],
  },
  {
    name: "Didit Sofwan Widiatmoko",
    position: "CGO, Founding Team",
    profile: [
      "Baba has led strategy, research, and commercial teams as a former CSO, CMO, and Sales & Marketing Director. His experience spans agency consulting, consumer insight work, and large-scale commercial operations across Southeast Asia.",
      "He drives Obrol's vision and category creation, bringing strong founder market fit shaped by years of understanding customers, field teams, and enterprise decision-making.",
    ],
  },
];
