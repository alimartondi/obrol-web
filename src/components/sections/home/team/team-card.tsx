import { Card } from "@/components/ui/card";
import { Teams } from "@/types/data";
import Image from "next/image";
import React from "react";

interface TeamCardProps {
  team: Teams;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Card className="relative p-0 border-0">
      <div className="relative aspect-3/4 bg-muted rounded-xl overflow-hidden">
        <Image src={team.image} alt={team.name} fill className="object-cover" />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-medium">{team.name}</h3>
        <p className="text-pretty text-muted-foreground">{team.role}</p>
      </div>
    </Card>
  );
}
