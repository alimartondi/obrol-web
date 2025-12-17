import React from "react";

export default function Hero() {
  return (
    <section className="pt-40 pb-16">
      <div className="container-wrapper">
        <div className="space-y-2">
          <span className="block ml-1">How Obrol Works</span>
          <div className="grid md:grid-cols-2 gap-6 xl:gap-16">
            <h2 className="secondary-title">
              Obrol is Indonesia&apos;s first On-Ground Intelligence Platform.
            </h2>
            <div className="w-full space-y-4 lg:pt-2">
              <p>
                We capture voice data from frontline teams — SPGs, surveyors,
                sales agents, relationship managers, trainers — and transform
                those conversations into structured insights using STT and
                LLM-powered analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
