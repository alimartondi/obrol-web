import ChatAnimation from "@/components/elements/chat-animation";
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
          <div className="aspect-3/4 rounded-md border p-6 overflow-hidden flex flex-col gap-6">
            <div className="flex-1 relative">
              {/* <div className="w-full h-full bg-muted translate-x-9 rounded-md flex flex-col gap-4 skew-x-12 p-4">
                <h6 className="font-medium">Conversation History</h6>
                <div className="bg-white w-full h-12 rounded-md -translate-y-2 shadow-lg"></div>
                <div className="w-full h-full bg-white shadow-xl rounded-md -translate-y-3 p-4 space-y-4">
                  <p className="text-xs">
                    The Brand Ambassador greets the Customer at a public space,
                    asks for consent to record, and begins exploring
                    preferences. When the Customer mentions a competing brand,
                    the system captures competitor insight. As taste emerges as
                    the key decision factor, deeper taste exploration follows.
                  </p>
                  <p className="text-xs">
                    The Customer prefers water that feels fresher and more
                    crisp, rather than “flat.” After trying the product, the
                    Customer feels the taste is too neutral and doesn't align
                    with personal preference, and the price is perceived as not
                    worth it. The Customer decides not to purchase.{" "}
                  </p>
                </div>
              </div> */}
            </div>

            <div className="w-full">
              <h4 className="text-xl xl:text-2xl font-semibold">
                Not another transcription tool.
              </h4>
            </div>
          </div>
          <div className="aspect-3/4 rounded-lg border p-6 flex flex-col gap-4 relative overflow-hidden">
            <div className="flex-1 min-h-0 overflow-hidden">
              <ChatAnimation />
            </div>
            <h4 className="relative z-10 text-xl font-medium">
              Not a chatbot.
            </h4>
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t h-64 from-30% from-white"></div>
          </div>
          <div className="aspect-3/4 rounded-md bg-accent p-6 ">
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
