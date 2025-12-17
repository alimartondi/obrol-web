import { CheckCircle2 } from "lucide-react";

export default function StepThree() {
  return (
    <section className="py-16">
      <div className="container-wrapper grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="aspect-square rounded-lg bg-accent"></div>
        <div className="space-y-6">
          <span className="font-semibold text-primary">/ 03</span>
          <h2 className="secondary-title">Structure, Categorize, Interpret</h2>
          <div className="space-y-4">
            <p>Obrol extracts:</p>
            <ul className="space-y-3 grid grid-flow-row-dense grid-cols-2">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="size-5 mt-1 text-primary" />
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
            <p>This becomes structured intelligence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  "Intent",
  "Entities",
  "Complaints",
  "Compliance markers",
  "Product interest",
  "Objections",
  "Customer insights",
  "Sentiment",
  "Trends across locations",
  "Performance behaviors",
];
