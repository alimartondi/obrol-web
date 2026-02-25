import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import type { IntelligenceItem } from "@/types/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import ChatAnimation from "@/components/elements/chat-animation";

export default function Intelligence() {
  return (
    <section className="py-16 lg:py-21.5">
      <div className="container-wrapper space-y-12 lg:space-y-16">
        <div className="md:text-center max-w-4xl mx-auto">
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
    <Card className="rounded-xl border-0 bg-muted p-3 xl:p-3 gap-0">
      <div className="aspect-5/4 bg-linear-to-b from-white rounded-md">
        <ChatAnimation />
      </div>
      <CardContent className="grid gap-3 pb-3 px-3">
        <CardTitle className="text-primary text-2xl">{title}</CardTitle>
        <CardDescription className="text-pretty">{description}</CardDescription>
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
