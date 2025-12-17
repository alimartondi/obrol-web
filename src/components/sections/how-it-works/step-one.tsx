import { CheckCircle2 } from "lucide-react";

export default function StepOne() {
  return (
    <section className="py-16">
      <div className="container-wrapper grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="aspect-square rounded-lg bg-accent"></div>
        <div className="space-y-6">
          <span className="font-semibold text-primary">/ 01</span>
          <h2 className="secondary-title">Capture the Conversations</h2>
          <div className="space-y-4">
            <p>Frontline teams use:</p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="size-5 mt-1 text-primary" />
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
            <p>
              Obrol works in noisy environments, multiple dialects, and varied
              speaking styles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  "A simple microphone",
  "Their own phone",
  "Or any recording workflow you already have",
];
