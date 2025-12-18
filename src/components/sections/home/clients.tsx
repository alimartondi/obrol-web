import LogoLoop from "@/components/reactbits/LogoLoop";
// import { React, SiNextdotjs, SiTypescript, SiTailwindcss } from 'lucide-react';

// const techLogos = [
//   { node: <SiReact />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];

// Alternative with image sources
const imageLogos = [
  {
    src: "/images/clients/logoipsum-217.svg",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/images/clients/logoipsum-219.svg",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/images/clients/logoipsum-297.svg",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/images/clients/logoipsum-317.svg",
    alt: "Company 4",
    href: "https://company3.com",
  },
  {
    src: "/images/clients/logoipsum-325.svg",
    alt: "Company 5",
    href: "https://company3.com",
  },
  {
    src: "/images/clients/logoipsum-398.svg",
    alt: "Company 6",
    href: "https://company3.com",
  },
];

export default function Clients() {
  return (
    <div className="py-8 lg:py-12 bg-primary">
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={28}
        gap={64}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0A52B4"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
