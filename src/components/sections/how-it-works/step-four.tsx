import { CheckCircle2 } from "lucide-react";

export default function StepFour() {
  return (
    <section className="py-16">
      <div className="container-wrapper grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <span className="font-semibold text-primary">/ 04</span>
          <h2 className="secondary-title">Insights Dashboard</h2>
          <div className="space-y-4">
            <p>Your team see:</p>
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
        <div className="aspect-square rounded-lg bg-accent order-1 md:order-2"></div>
      </div>
    </section>
  );
}

const features = [
  "Summary of each conversation",
  "Compliance scoring",
  "Sales performance patterns",
  "Heatmaps across branches",
  "Market insights",
  "Customer experience indicators",
];
