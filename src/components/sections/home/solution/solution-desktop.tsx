"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Built for the Frontline",
    description:
      "Frontline teams don't have time for complex tools, forms, or manual reporting. Obrol fits naturally into how work already happens in the field, with minimal effort required. Press to start and press to stop. Everything else is handled automatically in the background.",
    source:
      "https://images.unsplash.com/photo-1744740606260-1881836349d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Improved Commercial Performance",
    items: [
      "Clear visibility into customer needs, responses, and objections from real frontline interactions.",
      "Better use of sales and marketing budgets by aligning decisions with real on-ground intelligence.",
      "More informed decisions across sales, marketing and operations supported by consistent on-ground insight.",
      "Faster identification of what is working, what is not, and where performance can be improved.",
    ],
    source:
      "https://images.unsplash.com/photo-1639493115941-a70fcef4f715?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Optimised Field Performance",
    items: [
      "Clearer visibility into how messages are delivered and how frontline teams engage customers in real situations.",
      "Objective data on the number of customer contacts, product delivery, compliance, and adherence to script.",
      "Accurate location and timing data across all frontline interactions.",
      "Performance metrics to identify where coaching and training will have the greatest impact.",
      "A/B testing of scripts, linked directly to customer responses.",
    ],
    source:
      "https://images.unsplash.com/photo-1660491630578-4299a3c09db0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Faster, More Reliable Insight",
    items: [
      "Results are available in real-time.",
      "AI automatically transcribes all data for accuracy and full metadata analysis.",
      "A more reliable understanding of frontline conversations based on what customers and frontliners actually say.",
      "A consolidated dashboard providing a single, trusted view for decision-makers.",
      "Faster access to on-ground intelligence so teams can respond to what is happening in the field to improve performance.",
    ],
    source:
      "https://images.unsplash.com/photo-1761744068203-e3ec2a383c7e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
