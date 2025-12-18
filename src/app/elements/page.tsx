import ChatAnimation from "@/components/elements/chat-animation";
import React from "react";

export default function page() {
  return (
    <section className="pt-40 min-h-screen">
      <div className="container-wrapper grid grid-cols-3">
        <ChatAnimation />
      </div>
    </section>
  );
}
