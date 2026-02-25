import { SolutionItems } from "@/types/data";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { StickyScrollRevealDemo } from "./solution-desktop";

export default function Solution() {
  return (
    <section className="py-16 lg:py-21.5">
      <div className="container-wrapper grid gap-8">
        <div className="grid lg:hidden gap-6">
          <div className="relative aspect-square bg-accent rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1744740606260-1881836349d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Solution"
              fill
              sizes="(max-widht: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-medium">Built for the Frontline</h3>
            <p className="text-pretty">
              Frontline teams don't have time for complex tools, forms, or
              manual reporting. Obrol fits naturally into how work already
              happens in the field, with minimal effort required. Press to start
              and press to stop. Everything else is handled automatically in the
              background.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-16">
          <div className="grid gap-12">
            <div className="space-y-4">
              <h2 className="secondary-title">
                Improved Commercial Performance
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                veniam dignissimos eius vel voluptates aut animi. In doloremque
                ea magni similique tempore iusto nostrum aspernatur delectus
                soluta? Suscipit, vero aliquam?
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="secondary-title">
                Improved Commercial Performance
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                veniam dignissimos eius vel voluptates aut animi. In doloremque
                ea magni similique tempore iusto nostrum aspernatur delectus
                soluta? Suscipit, vero aliquam?
              </p>
            </div>
          </div>
          <div className="aspect-square bg-accent rounded-xl"></div>
        </div> */}

        <div className="grid gap-8 lg:hidden">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              source={solution.source}
              title={solution.title}
              items={solution.items}
            />
          ))}
        </div>

        <StickyScrollRevealDemo />
        {/* <div className="flex gap-6">
          <div className="w-8/12 bg-accent h-[550px] rounded-xl p-8 space-y-4">
            <h3 className="text-5xl font-medium">Built for the Frontline</h3>
            <p className="text-pretty">
              Frontline teams don't have time for complex tools, forms, or
              manual reporting. Obrol fits naturally into how work already
              happens in the field, with minimal effort required. Press to start
              and press to stop. Everything else is handled automatically in the
              background.
            </p>
          </div>
          <div className="w-4/12 bg-accent h-[550px] rounded-xl">2</div>
        </div>
        <div className="flex gap-6">
          <div className="w-4/12 bg-accent h-[550px] rounded-xl">1</div>
          <div className="w-8/12 bg-accent h-[550px] rounded-xl">2</div>
        </div> */}
      </div>
    </section>
  );
}

type SolutionItemsProps = SolutionItems;

function SolutionCard({ title, items, source }: SolutionItemsProps) {
  return (
    <div className="grid gap-6">
      <div className="relative aspect-square bg-accent rounded-xl overflow-hidden">
        <Image
          src={source}
          alt={title}
          fill
          sizes="(max-widht: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-medium">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle2 className="size-5 mt-1 text-primary" />
              <p className="flex-1">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const solutions = [
  {
    source:
      "https://images.unsplash.com/photo-1639493115941-a70fcef4f715?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Improved Commercial Performance",
    items: [
      "Clear visibility into customer needs, responses, and objections from real frontline interactions.",
      "Better use of sales and marketing budgets by aligning decisions with real on-ground intelligence.",
      "More informed decisions across sales, marketing and operations supported by consistent on-ground insight.",
      "Faster identification of what is working, what is not, and where performance can be improved.",
    ],
  },
  {
    source:
      "https://images.unsplash.com/photo-1660491630578-4299a3c09db0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Optimised Field Performance",
    items: [
      "Clearer visibility into how messages are delivered and how frontline teams engage customers in real situations.",
      "Objective data on the number of customer contacts, product delivery, compliance, and adherence to script.",
      "Accurate location and timing data across all frontline interactions.",
      "Performance metrics to identify where coaching and training will have the greatest impact.",
      "A/B testing of scripts, linked directly to customer responses.",
    ],
  },
  {
    source:
      "https://images.unsplash.com/photo-1761744068203-e3ec2a383c7e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: " Faster, More Reliable Insight",
    items: [
      "Results are available in real-time.",
      "AI automatically transcribes all data for accuracy and full metadata analysis.",
      "A more reliable understanding of frontline conversations based on what customers and frontliners actually say.",
      "A consolidated dashboard providing a single, trusted view for decision-makers.",
      "Faster access to on-ground intelligence so teams can respond to what is happening in the field to improve performance.",
    ],
  },
];
