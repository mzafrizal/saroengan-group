"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";
  duration?: "fast" | "normal" | "slow";
  delay?: number; // Delay in milliseconds
  className?: string;
  threshold?: number; // How much of the element needs to be visible (0 to 1)
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  duration = "normal",
  delay = 0,
  className = "",
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If element is in view, we reveal it
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once revealed, we can optionally stop observing it
          // observer.unobserve(entries[0].target); // Uncomment to animate only once
        } else {
          // If you want it to hide again when scrolled out of view, keep this:
          // setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // Base transition duration
  const durationClass =
    duration === "fast"
      ? "duration-300"
      : duration === "slow"
      ? "duration-1000"
      : "duration-700";

  // Initial hidden state based on animation type
  let initialClass = "";
  switch (animation) {
    case "fade-up":
      initialClass = "opacity-0 translate-y-12";
      break;
    case "fade-down":
      initialClass = "opacity-0 -translate-y-12";
      break;
    case "fade-left":
      initialClass = "opacity-0 translate-x-12";
      break;
    case "fade-right":
      initialClass = "opacity-0 -translate-x-12";
      break;
    case "zoom-in":
      initialClass = "opacity-0 scale-90";
      break;
  }

  // Final visible state
  const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${durationClass} ${
        isVisible ? visibleClass : initialClass
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
