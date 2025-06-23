'use client'

import React from "react";

import {
  SiTypescript,
  SiNodedotjs,
  SiFastify,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

const Tecnologies = () => {
  return (
    <div className="border rounded-2xl shadow-2xl p-9">
      <h1 className="text-3xl uppercase font-mono mb-2">Tecnologias</h1>
       <div className="mt-3">
      <Carousel
          plugins={[
             Autoplay({
             delay: 5000
        })
      ]} className="">
          <CarouselContent className="p-1">
          <CarouselItem className="basis-2/6"><SiTypescript size={50} /></CarouselItem>
          <CarouselItem className="basis-2/6"><SiNodedotjs size={50}/></CarouselItem>
          <CarouselItem className="basis-2/6"><SiFastify size={50}/></CarouselItem>
          <CarouselItem className="basis-2/6"><SiNextdotjs size={50}/></CarouselItem>
          <CarouselItem className="basis-2/6"><SiPrisma size={50}/></CarouselItem>
          <CarouselItem className="basis-2/6"><SiPostgresql size={50}/></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Tecnologies;
