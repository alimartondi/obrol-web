import type { LucideIcon } from "lucide-react";
import {
  Brain,
  CheckCircle2,
  Heart,
  Icon,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-wrapper space-y-12">
        {/* <div className="flex xl:gap-16">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold leading-[1.15]">
              What Obrol Can Do
            </h2>
          </div>
          <div className="w-1/2 pt-2">
            <p>
              Obrol closes the gap between your field ops and your boardroom.
              Instantly. Accurately. At scale.
            </p>
          </div>
        </div> */}

        <div className="flex justify-center">
          <div className="max-w-xl md:text-center space-y-4">
            <h2 className="secondary-title">What Obrol Can Do</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              impedit quasi laboriosam ullam error adipiscia necessitatibus
              dicta.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-12 gap-6">
            {services.map((service, i) => (
              <Card
                key={i}
                className="lg:first:col-span-7 col-span-12 lg:last:col-span-7 lg:col-span-5 bg-linear-to-br from-primary/5"
              >
                <CardHeader className="space-y-4 xl:px-8">
                  <div className="h-12 w-12 bg-primary rounded-md grid place-items-center">
                    <service.icon className="size-6 mt-1 text-primary-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="xl:px-8">
                  <ul className="space-y-3">
                    {service.list.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="size-5 mt-1 text-primary" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-lg p-6 xl:px-8 xl:py-12 space-y-4 border">
            <div className="h-12 w-12 bg-primary text-white rounded-md grid place-content-center">
              <Brain className="size-6 mt-1" />
            </div>
            <h3 className="text-xl font-semibold">Enterprise Intelligence</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <span className="block font-semibold text-lg">/ 01</span>
                <h3 className="font-semibold">Capture Reality</h3>
                <p>
                  Record and structure the everyday conversations happening
                  across your sales teams, promoters, field agents, and
                  researchers—no matter dialect, location, or environment.
                </p>
              </div>
              <div className="space-y-4">
                <span className="block font-semibold text-lg">/ 02</span>
                <h3 className="font-semibold">Understand Meaning</h3>
                <p>
                  Surface the themes, sentiment, patterns, and drivers behind
                  customer behaviour, frontline performance, and operational
                  execution, including what customers love, dislike, and
                  struggle with.
                </p>
              </div>
              <div className="space-y-4">
                <span className="block font-semibold text-lg">/ 03</span>
                <h3 className="font-semibold">Improve Outcomes</h3>
                <p>
                  Give leaders and teams clear Ground Truth to refine playbooks,
                  reduce risk, elevate customer experience, and guide better
                  decisions across the organisation.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 ">
                    <CheckCircle2 className="size-5 mt-1" />
                    <span className="flex-1">
                      Build proprietary voice datasets
                    </span>
                  </li>
                  <li className="flex gap-3 ">
                    <CheckCircle2 className="size-5 mt-1" />
                    <span className="flex-1">
                      Train custom LLMs across functions
                    </span>
                  </li>
                  <li className="flex gap-3 ">
                    <CheckCircle2 className="size-5 mt-1" />
                    <span className="flex-1">
                      Achieve on-ground intelligence advantage
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Target,
    title: "Sales & Frontline Performance",
    list: [
      "Track how pitches and scripts are delivered",
      "Understand and structure customer insights",
      "Identify high-performers",
      "Improve conversion playbooks",
    ],
  },
  {
    icon: Heart,
    title: "Customer Experience",
    list: [
      "Understand what customers love, hate, and need",
      "Analyze friction points across outlets or regions",
    ],
  },
  {
    icon: Shield,
    title: "Compliance Monitoring",
    list: [
      "Detect missing disclosures",
      "Identify red flags",
      "Monitor clarity and delivery of scripts",
      "Reduce brand and regulatory risk",
    ],
  },

  {
    icon: TrendingUp,
    title: "Market Research",
    list: [
      "Convert real customer conversations into structured datasets",
      "Spot trends faster",
      "Compare sentiment across locations",
      "Generate insights without waiting weeks",
    ],
  },
];
