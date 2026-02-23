import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { ProblemItem } from "@/types/data";

type ProblemCardProps = ProblemItem;

export default function ProblemCard({ icon, description }: ProblemCardProps) {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <div className="h-12 w-12 bg-accent rounded-lg">{icon}</div>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}
