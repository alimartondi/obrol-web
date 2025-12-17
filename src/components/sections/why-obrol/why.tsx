import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function WhyObrol() {
  return (
    <section className="py-16">
      <div className="container-wrapper space-y-16">
        <div className="max-w-3xl flex justify-center mx-auto">
          <div className="md:text-center space-y-4">
            <h2 className="secondary-title">What Makes Obrol Different?</h2>
            <p className="max-w-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              illo consequatur quasi itaque facilis atque!
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <h3 className="text-2xl font-semibold">
                Built by Teams Who Understand the Ground
              </h3>
            </CardHeader>
            <CardContent>
              Obrol is created by people who have worked across frontline
              operations, enterprise environments, AI development, and real
              customer behaviour in Indonesia. We know the ground because we
              have spent years on it.
            </CardContent>
          </Card>
          <div className="bg-accent rounded-lg h-[430px]">2</div>
          <div className="bg-accent rounded-lg h-[430px]">3</div>
          <div className="bg-accent rounded-lg h-[430px]">4</div>
          <div className="bg-accent rounded-lg h-[430px]">5</div>
        </div>
      </div>
    </section>
  );
}
