"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";

export function ThreeDCard({
  ourTeam,
} : {
  ourTeam: {
    id: number;
    name: string,
    surname: string,      
    position: string,
    desc: string,
    country: string,
    thumbnail: string,
    department: string,
  } [];
}) {
  return (
    <>
      {ourTeam.map((member) => (
        <CardContainer key={member.id} className="inter-var hover:z-50 shadow-lg">
          <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1]  border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border -mt-24 md:mt-0">
            <CardItem
              translateZ="50"
              className="px-4 text-xl font-bold text-neutral-600 dark:text-white"
            >
              {member.name}
            </CardItem>
            <CardItem
              translateZ="50"
              className="px-4 text-xl font-bold text-neutral-600 dark:text-owlOrange"
            >
              {member.position}
            </CardItem>             
            <CardItem
              translateZ="100"
              rotateX={30}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src={member.thumbnail}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={member.name}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="px-4 text-neutral-500 text-sm max-w-sm mt-12 dark:text-neutral-300"
            >
              {member.desc}
            </CardItem>

            <div className="flex justify-start items-center gap-16 mt-4">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-orange"
              >
                {member.country} →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-owlOrange"
              >
                {member.department}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </>
  );
}
