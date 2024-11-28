"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/data/TechStack.json";

const TechStack = ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {

    const animationContainer = useRef<HTMLDivElement>(null); // Specify the type for the ref

    useEffect(() => {
      if (animationContainer.current) {
        // Load the animation only once
        const animationInstance = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData, // Directly using the imported JSON data
        });
  
        // Clean up the animation when the component unmounts
        return () => {
          animationInstance.destroy();
        };
      }
    }, []);

  return (
    <div className={cn(
        " ",
        className
      )} ref={animationContainer}></div>
  )
}

export default TechStack