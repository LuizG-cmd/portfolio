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
    <div className="flex flex-col border rounded-2xl shadow-xl p-9 max-w-auto">
      <h1 className="text-2xl mb-2">Tecnologias</h1>
      <Carousel
          plugins={[
             Autoplay({
             delay: 5000
        })
      ]}>
        <div className="items-center justify-center mt-3 max-w-auto">
          <CarouselContent>
          <CarouselItem><SiTypescript size={50} /></CarouselItem>
          <CarouselItem><SiNodedotjs size={50}/></CarouselItem>
          <CarouselItem><SiFastify size={50}/></CarouselItem>
          <CarouselItem><SiNextdotjs size={50}/></CarouselItem>
          <CarouselItem><SiPrisma size={50}/></CarouselItem>
          <CarouselItem><SiPostgresql size={50}/></CarouselItem>
          </CarouselContent>
        </div>
     </Carousel>
    </div>
  );
};

export default Tecnologies;
