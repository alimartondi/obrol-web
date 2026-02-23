import React from "react";

export default function introduction() {
  return (
    <section className="py-12 lg:py-21.5">
      <div className="container-wrapper space-y-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="secondary-title">
            Obrol is Indonesia's First On-Ground Intelligence Platform.
          </h2>
        </div>

        <div className="bg-accent/50  rounded-2xl grid grid-cols-2 p-12 gap-16 overflow-hidden">
          <div>
            <div className="aspect-square bg-muted rounded-xl"></div>
          </div>
          <div className="space-y-4 pt-16">
            <h3 className="text-5xl font-semibold">01</h3>
            <p>
              On-Ground Intelligence is a new category built entirely from
              frontline conversations. Instead of relying on reports, summaries,
              or assumptions, Obrol captures real-world voice interactions from
              sales promoters, field teams, and frontline staff in any language
              and environment.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-12">
          <div className="aspect-square bg-accent rounded-lg"></div>
          <p>
            On-Ground Intelligence is a new category built entirely from
            frontline conversations. Instead of relying on reports, summaries,
            or assumptions, Obrol captures real-world voice interactions from
            sales promoters, field teams, and frontline staff in any language
            and environment.
          </p>
        </div> */}
      </div>
    </section>
  );
}
