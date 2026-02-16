import React from "react";

export default function Solution() {
  return (
    <section className="py-16 lg:py-21.5">
      <div className="container-wrapper grid gap-6">
        <div className="flex gap-6">
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
        </div>
      </div>
    </section>
  );
}
