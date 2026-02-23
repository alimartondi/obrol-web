import About from "@/components/sections/home/about";
import Clients from "@/components/sections/home/clients";
import Hero from "@/components/sections/home/hero";
import Intelligence from "@/components/sections/home/intelligence";
import Introduction from "@/components/sections/home/introduction";
import Join from "@/components/sections/home/join";
import Problem from "@/components/sections/home/problem";
import CinematicScroll from "@/components/sections/home/problem/cinematic-scroll";
import StickyParallax from "@/components/sections/home/problem/sticky-parallax";
import Services from "@/components/sections/home/services";
import Solution from "@/components/sections/home/solution";
import Team from "@/components/sections/home/team";
import WhoIs from "@/components/sections/home/who-is";
import Why from "@/components/sections/home/why";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Introduction />
      <Problem />
      {/* <CinematicScroll /> */}
      {/* <StickyParallax /> */}
      <Solution />
      <Intelligence />
      <Team />
      {/* <About /> */}
      {/* <Why /> */}
      {/* <Services /> */}
      {/* <Join /> */}
    </>
  );
}
