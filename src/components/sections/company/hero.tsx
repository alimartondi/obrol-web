import { section } from "motion/react-client";
import React from "react";

export default function Hero() {
  return (
    <section className="pt-40 pb-16">
      <div className="container-wrapper space-y-8 lg:space-y-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <h2 className="secondary-title">Hallo, aku halaman company</h2>
          <p className="pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure
            cupiditate rerum blanditiis error quibusdam minus architecto quos
            voluptas, debitis, fuga in neque voluptatem voluptatibus?
          </p>
        </div>

        <div className="aspect-square md:aspect-16/7 bg-accent rounded-lg"></div>

        <div className="max-w-xl mx-auto space-y-2">
          <span className="block">Our Mission</span>
          <h3 className="relative text-2xl lg:text-4xl font-bold text-pretty">
            <span className="hidden lg:absolute -top-1 -left-10 text-6xl font-bold">
              "
            </span>
            To turn the conversations happening across Southeast Asia into
            structured intelligence that transforms how businesses understand
            their customers, their teams, and the market.
          </h3>
        </div>
      </div>
    </section>
  );
}
