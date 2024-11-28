"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { logoCarousel } from "@/data";
 
export function LogoCarousel() {
  return (
    <div className="h-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={logoCarousel}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
