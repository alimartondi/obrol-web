import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function About() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-wrapper space-y-12">
        <div className="grid md:grid-cols-2 gap-8 xl:gap-16">
          <div className="w-full">
            <h2 className="secondary-title">
              Obrol is Indonesia&apos;s first On-Ground Intelligence Platform.
            </h2>
          </div>
          <div className="w-full space-y-4 pt-2">
            <p>
              We capture voice data from frontline teams — SPGs, surveyors,
              sales agents, relationship managers, trainers — and transform
              those conversations into structured insights using STT and
              LLM-powered analysis.
            </p>
            <p>
              Obrol helps organizations understand what their customers really
              say, do, want, and struggle with — at scale, and in real time.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="aspect-3/4 rounded-md bg-accent py-6 overflow-hidden flex flex-col gap-6">
            <div className="flex-1 relative pl-6">
              <div className="w-full h-full bg-white rounded pt-6 pl-6 flex flex-col gap-4">
                <div className="w-full h-12 bg-accent rounded-s-full"></div>
                <div className="w-full h-full bg-accent rounded-s-lg p-4"></div>
              </div>
            </div>
            <div className="px-6 w-full">
              <h4 className="text-xl xl:text-2xl font-semibold">
                Not another transcription tool.
              </h4>
            </div>
          </div>
          <div className="aspect-3/4 rounded-md bg-accent p-6">
            <h4 className="text-xl font-medium">Not a chatbot.</h4>
          </div>
          <div className="aspect-3/4 rounded-md bg-accent p-6">
            <h4 className="text-xl font-medium">
              A new category of Intelligence.
            </h4>
          </div>
          {/* <div className="aspect-3/4 rounded-md bg-accent p-6">
            <h4 className="text-xl font-medium">On-ground Intelligence.</h4>
          </div> */}
        </div>

        {/* <h2 className="text-4xl font-bold leading-[1.15]">
          Obrol shows you and your teams what&apos;s happening on the ground,
          why it&apos;s happening, and how to improve. By structuring real
          frontline conversations into patterns and insights, Obrol delivers the
          ground truth your teams have never had before
        </h2> */}
      </div>
    </section>
  );
}
