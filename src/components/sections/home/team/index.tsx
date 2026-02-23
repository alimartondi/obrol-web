import TeamSwiper from "./team-swiper";
import { Teams } from "@/types/data";

export default function Team() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-wrapper mb-12 text-center">
        <h2 className="secondary-title">Who is Obrol</h2>
      </div>

      <div className="md:container">
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure cupiditate rerum blanditiis error quibusdam minus architecto quos voluptas, debitis, fuga in neque voluptatem voluptatibus?",
  },
  {
    name: "Avineet Hazuria",
    role: "COO & Co-founder",
    image:
      "https://images.unsplash.com/photo-1649879682431-067de3305ac4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure cupiditate rerum blanditiis error quibusdam minus architecto quos voluptas, debitis, fuga in neque voluptatem voluptatibus?",
  },
  {
    name: "Dimas Harya",
    role: "CTO, Founding Team",
    image:
      "https://images.unsplash.com/photo-1631364334774-74da5d2d4af8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure cupiditate rerum blanditiis error quibusdam minus architecto quos voluptas, debitis, fuga in neque voluptatem voluptatibus?",
  },
  {
    name: "Didit Sofwan Widiatmoko",
    role: "CGO, Founding Team",
    image:
      "https://images.unsplash.com/photo-1606246481683-2b09e249396f?q=80&w=854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure cupiditate rerum blanditiis error quibusdam minus architecto quos voluptas, debitis, fuga in neque voluptatem voluptatibus?",
  },
];
