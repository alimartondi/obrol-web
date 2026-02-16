import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import type { IntelligenceItem } from "@/types/problem";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Intelligence() {
  return (
    <section className="pt-12 lg:py-16 pb-16 lg:pb-24">
      <div className="container-wrapper space-y-14">
        <div className="text-center max-w-4xl mx-auto translate-y-[26px]">
          <h2 className="secondary-title">On-Ground Intelligence</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {intelligences.map((intelligence, index) => (
            <IntelligenceCard key={index} {...intelligence} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntelligenceCard({ title, description }: IntelligenceItem) {
  return (
    <Card className="border-0 bg-muted aspect-4/5">
      <CardContent className="grid gap-4">
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

const intelligences: IntelligenceItem[] = [
  {
    title: "Capture Reality",
    description:
      "Record and structure everyday conversations across sales teams, promoters, field agents, and researchers, regardless of language, location, or environment.",
  },
  {
    title: "Understand Meaning",
    description:
      "Surface sentiment, patterns, and decision drivers from what customers actually say, revealing what they love, dislike, and struggle with.",
  },
  {
    title: "Improve Outcomes",
    description:
      "Equip leaders and teams with insights to refine playbooks, reduce risk, improve customer experience, and guide better decisions across the organisation.",
  },
];
