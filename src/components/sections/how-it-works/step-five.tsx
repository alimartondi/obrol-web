import { CheckCircle2 } from "lucide-react";

export default function StepFive() {
  return (
    <section className="py-16">
      <div className="container-wrapper grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="aspect-square rounded-lg bg-accent"></div>
        <div className="space-y-6">
          <span className="font-semibold text-primary">/ 05</span>
          <h2 className="secondary-title">Intelligence Over Time</h2>
          <div className="space-y-4">
            <p>
              This is where Obrol becomes powerful. As more conversations are
              captured, your organization builds a{" "}
              <strong>proprietary intelligence moat:</strong>{" "}
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="size-5 mt-1 text-primary" />
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  "Sector-specific insights",
  "Region-specific models",
  "Predictive patterns",
  "A real data advantage competitors can't copy",
];
