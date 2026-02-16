import React from "react";

export default function WhoIs() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-wrapper space-y-12">
        <h2 className="secondary-title">Who is Obrol</h2>

        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="aspect-3/4 bg-accent rounded-lg"></div>
            <p>
              Baba has led strategy, research, and commercial teams as a former
              CSO, CMO, and Sales & Marketing Director. His experience spans
              agency consulting, consumer insight work, and large-scale
              commercial operations across Southeast Asia.
            </p>
            <p>
              He drives Obrol's vision and category creation, bringing a strong
              founder market fit shaped by years of understanding customers,
              field teams, and enterprise decision-making.
            </p>
          </div>
          <div className="aspect-3/4 bg-accent rounded-lg"></div>
          <div className="aspect-3/4 bg-accent rounded-lg"></div>
          <div className="aspect-3/4 bg-accent rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
