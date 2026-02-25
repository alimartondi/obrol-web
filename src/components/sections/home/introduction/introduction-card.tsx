import Image from "next/image";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

type Props = {
  i: number;
  title: string;
  src: string;
  description: string;
};

export default function IntroductionCard({
  i,
  title,
  src,
  description,
}: Props) {
  return (
    <Card className="bg-muted border-0 rounded-xl">
      <CardContent className="grid gap-4">
        <div
          className={`${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}
            relative aspect-square overflow-hidden rounded-lg
          `}
        >
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-widht: 768px) 50vh"
            className="object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">0{i + 1}</h3>
          <CardDescription className="text-pretty">
            {description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
