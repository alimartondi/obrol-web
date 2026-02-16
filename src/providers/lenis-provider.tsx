"use client";

import { ReactLenis as Lenis } from "lenis/react";
import type { PropsWithChildren } from "react";

const LenisProvider = ({ children }: PropsWithChildren) => {
  return (
    <Lenis
      root
      options={{
        duration: 1,
        smoothWheel: true,
      }}
    >
      {children}
    </Lenis>
  );
};

export default LenisProvider;
