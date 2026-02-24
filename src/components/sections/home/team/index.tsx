import TeamSwiper from "./team-swiper";
import { Teams } from "@/types/data";

export default function Team() {
  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="container-wrapper mb-12 lg:mb-16 text-center">
        <h2 className="secondary-title">Who is Obrol</h2>
      </div>

      <div className="container-wrapper">
        <TeamSwiper teams={teams} />
      </div>
    </section>
  );
}

const teams: Teams[] = [
  {
    name: "Baba Hazuria",
    role: "CEO & Co-founder",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "Baba has led strategy, research, and commercial teams as a former CSO, CMO, and Sales & Marketing Director. His experience spans agency consulting, consumer insight work, and large-scale commercial operations across Southeast Asia.",
      "He drives Obrol's vision and category creation, bringing a strong founder market fit shaped by years of understanding customers, field teams, and enterprise decision-making.",
    ],
  },
  {
    name: "Avineet Hazuria",
    role: "COO & Co-founder",
    image:
      "https://images.unsplash.com/photo-1649879682431-067de3305ac4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "Execution, productization, operations, architecture clarity, enterprise delivery. 15+ years across research, strategy, communications, systems, data, and product builds.",
    ],
  },
  {
    name: "Dimas Harya",
    role: "CTO, Founding Team",
    image:
      "https://images.unsplash.com/photo-1631364334774-74da5d2d4af8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "Technical architecture, AI deployment, platform engineering. Founder of Definite, deep experience in systems design, dev teams, and scalable product builds.",
    ],
  },
  {
    name: "Didit Sofwan Widiatmoko",
    role: "CGO, Founding Team",
    image:
      "https://images.unsplash.com/photo-1606246481683-2b09e249396f?q=80&w=854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "Go-to-market, field operations, and frontline performance.",
      "A practitioner at heart, Didit has run large-scale sales and activation programs across industries through his work at Contendr. At Obrol, he leads growth strategy, on-ground rollout, and customer adoption — translating field realities into product improvements and turning early pilots into scalable, repeatable revenue.",
    ],
  },
];
