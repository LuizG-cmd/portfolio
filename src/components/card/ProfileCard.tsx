"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";

export const ProfileCard = () => {
  return (
    <div>
      <Card>
        <CardHeader className="">
          <div className="flex items-center justify-center mb-4">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/69115352?v=4"
              alt="logo"
              width={150}
              height={25}
            />
          </div>

          <CardDescription>
            <p>LUIZ GUILHERME</p>
            <p>FULLSTACK DEVELOPER</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p>devluizg@outlook.com.br</p>
            <p>github.com/LuizG-cmd</p>
          </div>
        </CardContent>

        <CardFooter>
          <a
            href="/curriculo.pdf"
            download
            className="bg-primary text-primary-foreground shadow-xs hover:bg-amber-300 rounded p-2 text-sm"
          >
            Baixar CV
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfileCard;
