"use client";

import { useState, useEffect } from "react";

import AnimatedContent from "@/components/reactbits/AnimatedContent";

type Sender = "sp" | "cs";

interface Message {
  id: number;
  sender: Sender;
  time: string;
  text: string;
}

export default function ChatAnimation() {
  const [hoverKey, setHoverKey] = useState(0);

  const BASE_DELAY = 0.6; // jeda sebelum chat pertama
  const STAGGER = 0.45; // jarak antar chat

  return (
    <div
      onMouseEnter={() => setHoverKey((k) => k + 1)}
      className="relative p-6 bg-white rounded-xl grid gap-4 h-full"
    >
      <h3 className="font-medium">Transcript</h3>

      <div className="rounded-lg p-6 grid gap-4 overflow-hidden h-[432px]">
        {messages.map((msg, index) => (
          <AnimatedContent
            key={`${hoverKey}-${msg.id}`} // ⬅️ REMOUNT SAAT HOVER
            distance={30}
            direction="vertical"
            duration={0.6}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={BASE_DELAY + index * STAGGER}
          >
            {msg.sender === "sp" ? (
              <div className="flex gap-3 text-white">
                <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-xs font-medium">
                  SPG
                </div>
                <div className="w-full rounded-e-md rounded-bl-md bg-primary flex-1">
                  <p className="text-xs p-3">{msg.text}</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <div className="w-full rounded-s-md rounded-br-md bg-accent flex-1">
                  <p className="text-xs p-3 text-muted-foreground">
                    {msg.text}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-md bg-accent flex items-center justify-center text-xs font-medium">
                  CUS
                </div>
              </div>
            )}
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}

const messages: Message[] = [
  {
    id: 1,
    sender: "sp",
    time: "09:00",
    text: "Hi there! 👋 Welcome. May I know your name?",
  },
  {
    id: 2,
    sender: "cs",
    time: "09:01",
    text: "Hi, my name is Jhon.",
  },
  {
    id: 3,
    sender: "sp",
    time: "09:02",
    text: "Nice to meet you, Jhon! 😊",
  },
  {
    id: 4,
    sender: "sp",
    time: "09:02",
    text: "If you don't mind, may I take a minute to share something special with you?",
  },
  {
    id: 5,
    sender: "cs",
    time: "09:03",
    text: "Sure, go ahead.",
  },
  {
    id: 6,
    sender: "sp",
    time: "09:04",
    text: "Thank you, Jhon! ✨ I'd like to introduce one of our best-selling products.",
  },
];
