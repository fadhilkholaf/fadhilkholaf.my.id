"use client";

import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";
import Image from "next/image";

import { useTheme } from "./providers/ThemeProvider";

const Landing = forwardRef<
  HTMLElement,
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>(({ ...props }, ref) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      ref={ref}
      className="h-screen w-full relative flex justify-between items-center flex-col"
      {...props}
    >
      <Image
        className="h-fit w-full object-fill mix-blend-exclusion p-4 max-w-[1024px]"
        src="/images/fadhil.svg"
        alt="Fadhil"
        loading="lazy"
        width={697}
        height={97}
      />
      <button
        onClick={() => toggleTheme()}
        className="w-full flex text-light text-lg font-semibold justify-between items-center h-fit max-w-[1024px] px-4"
      >
        <span>Change</span>
        <span>-</span>
        <span>{theme === "dark" ? "Light" : "Dark"}</span>
        <span>-</span>
        <span>Mood</span>
      </button>
      <Image
        className="h-fit w-full object-fill mix-blend-exclusion p-4 max-w-[1024px]"
        src="/images/kholaf.svg"
        alt="Kholaf"
        loading="lazy"
        width={1021}
        height={97}
      />
      <video
        className="w-full h-full top-0 left-0 absolute object-cover -z-10 brightness-50"
        autoPlay
        loop
        muted
        preload="none"
      >
        <source src="/videos/landing-page.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
});

Landing.displayName = "Landing";

export default Landing;
