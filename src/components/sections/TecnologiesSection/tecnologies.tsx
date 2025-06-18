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
    <div className="flex flex-col border rounded-2xl shadow-xl p-9">
      <h1 className="text-3xl uppercase font-mono mb-2">Tecnologias</h1>
       <div className="mt-3 border max-w-auto justify-center items-center">
      <Carousel
          plugins={[
             Autoplay({
             delay: 5000
        })
      ]}>
          <CarouselContent className="p-1">
          <CarouselItem><SiTypescript size={50} /></CarouselItem>
          <CarouselItem><SiNodedotjs size={50}/></CarouselItem>
          <CarouselItem><SiFastify size={50}/></CarouselItem>
          <CarouselItem><SiNextdotjs size={50}/></CarouselItem>
          <CarouselItem><SiPrisma size={50}/></CarouselItem>
          <CarouselItem><SiPostgresql size={50}/></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Tecnologies;
