"use client";

import { useEffect, useRef } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Project from "@/components/Project";

const Home = () => {
  const last = useRef<HTMLElement>(null);
  const start = useRef<HTMLElement>(null);
  const triggerLast = useRef<HTMLElement>(null);
  const triggerStart = useRef<HTMLElement>(null);

  useEffect(() => {
    if (start.current) {
      start.current.scrollIntoView({ behavior: "instant" });
    }

    const observeLast = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (start.current) {
              start.current.scrollIntoView({ behavior: "instant" });
            }
          }
        });
      },
      { threshold: 1 }
    );

    const observeStart = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (last.current) {
              last.current.scrollIntoView({ behavior: "instant" });
            }
          }
        });
      },
      { threshold: 1 }
    );

    if (triggerLast.current) {
      observeLast.observe(triggerLast.current);
    }

    if (triggerStart.current) {
      observeStart.observe(triggerStart.current);
    }

    return () => {
      if (triggerLast.current) {
        observeLast.unobserve(triggerLast.current);
      }

      if (triggerStart.current) {
        observeStart.unobserve(triggerStart.current);
      }
    };
  }, []);

  return (
    <main className="h-full">
      <section className="h-[1px]" ref={triggerStart}></section>
      <section className="h-full" ref={start}>
        <Landing />
      </section>
      <About />
      {/* <Project /> */}
      <Contact />
      <section className="h-full" ref={last}>
        <Landing />
      </section>
      <section className="h-[1px]" ref={triggerLast}></section>
    </main>
  );
};

export default Home;
