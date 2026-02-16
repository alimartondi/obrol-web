import React from "react";
import ProblemCard from "./problem-card";
import type { ProblemItem } from "@/types/problem";

export default function Problem() {
  return (
    <section className="py-12 lg:py-21.5 bg-primary">
      <div className="container-wrapper space-y-12">
        <div className="text-center max-w-4xl mx-auto text-white">
          <h2 className="secondary-title">
            The Problem with Frontline Interactions.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}

const problems: ProblemItem[] = [
  {
    icon: "",
    description:
      "Customer interactions are rarely captured or analysed consistently",
  },
  {
    icon: "",
    description:
      "Reporting is manual or incomplete, pulling time away from frontline selling and customer experience",
  },
  {
    icon: "",
    description:
      "Information is filtered as it moves up the organisation, reducing accuracy",
  },
  {
    icon: "",
    description:
      "Limited visibility makes it hard to identify coaching and improvement opportunities",
  },
  {
    icon: "",
    description:
      "Too many layers sit between the field force and decision-makers",
  },
  {
    icon: "",
    description: "By the time insights reach leaders, they are often outdated",
  },
];
