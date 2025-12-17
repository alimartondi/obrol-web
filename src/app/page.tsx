import About from "@/components/sections/home/about";
import Clients from "@/components/sections/home/clients";
import Hero from "@/components/sections/home/hero";
import Intelligence from "@/components/sections/home/intelligence";
import Join from "@/components/sections/home/join";
import Services from "@/components/sections/home/services";
import Why from "@/components/sections/home/why";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Intelligence />
      <Why />
      <Services />
      <Join />
    </>
  );
}
