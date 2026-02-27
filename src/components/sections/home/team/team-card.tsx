import * as React from "react";

import Image from "next/image";

import { Teams } from "@/types/data";

import { Minus, Plus } from "lucide-react";

interface TeamCardProps {
  team: Teams;
}

export default function TeamCard({ team }: TeamCardProps) {
  const [rotationCount, setRotationCount] = React.useState(0);

  const handleFlip = () => {
    setRotationCount((prev) => prev + 180);
  };

  return (
    <div
      onClick={handleFlip}
      className="aspect-4/5 min-h-[480px] max-w-full perspective-[1000px] cursor-pointer"
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotationCount}deg)`,
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <Image
            src="/images/people/Portrait-Placeholder.png"
            alt={team.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary to-75% flex items-end px-6 py-7">
            <div className="flex justify-between w-full items-center">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-white">{team.name}</h3>
                <p className="text-pretty text-white/75">{team.role}</p>
              </div>
              <div className="h-10 w-10 bg-white/35 backdrop-blur-md rounded-md grid place-items-center text-white">
                <Plus />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-muted rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="p-6 flex flex-col gap-4 h-full">
            <div>
              <h3 className="text-xl font-medium text-primary">{team.name}</h3>
              <p className="text-pretty text-muted-foreground">{team.role}</p>
            </div>
            {team.description.map((desc, index) => (
              <p key={index} className="text-pretty">
                {desc}
              </p>
            ))}
            <div className="h-10 w-10 bg-primary/35 backdrop-blur-md rounded-md grid place-items-center text-white mt-auto ml-auto">
              <Minus />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <Card
    //   onClick={handleFlip}
    //   className={cn(
    //     "relative py-0! border-0 rounded-xl overflow-hidden perspective-[1000px] aspect-4/5",
    //   )}
    // >
    //   <div
    //     className="relative w-full h-full bg-white transition-transform duration-700 ease-out"
    //     style={{
    //       transformStyle: "preserve-3d",
    //       transform: `rotateY(${rotationCount}deg)`,
    //     }}
    //   >
    //     <div
    //       className="absolute w-full h-full border border-primary-darken rounded-xl overflow-hidden"
    //       style={{
    //         backfaceVisibility: "hidden",
    //         WebkitBackfaceVisibility: "hidden",
    //         transform: "rotateY(0deg)",
    //       }}
    //     >
    //       <div className="relative aspect-4/5">
    //         <Image
    //           src={team.image}
    //           alt={team.name}
    //           fill
    //           className="object-cover"
    //         />
    //       </div>
    //       <div className="absolute inset-0 bg-linear-to-t from-primary to-75% flex items-end px-6 py-7">
    //         <div className="space-y-1">
    //           <h3 className="text-xl font-medium text-white">{team.name}</h3>
    //           <p className="text-pretty text-muted">{team.role}</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div
    //       className="absolute w-full h-full border border-primary-darken rounded-xl overflow-hidden p-4"
    //       style={{
    //         backfaceVisibility: "hidden",
    //         WebkitBackfaceVisibility: "hidden",
    //         transform: "rotateY(180deg)",
    //       }}
    //     >
    //       Belakang
    //     </div>
    //   </div>

    // </Card>
  );
}
