"use client";

import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import TeamCard from "./team-card";
import type { Teams } from "@/types/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamSwiperProps {
  teams: Teams[];
}

export default function TeamSwiper({ teams }: TeamSwiperProps) {
  const swiperRef = React.useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  return (
    <div className="relative space-y-6">
      <Swiper
        modules={[Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={1.05}
        spaceBetween={20}
        className="px-5!"
        pagination={{
          clickable: true,
        }}
      >
        {teams.map((team, index) => (
          <SwiperSlide key={index} className="pb-10">
            <TeamCard team={team} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden lg:flex gap-2 mb-4 px-5">
        <Button
          aria-label="Previous Slide"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className="h-10 w-10"
        >
          <ChevronLeft className="size-5" />
        </Button>

        <Button
          aria-label="Next Slide"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className="h-10 w-10"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
