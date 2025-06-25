"use client";

import React from "react";

import { ModeToggle } from "../dark-light-toogle/darkmode-toggle";

export default function Header() {
  return (
    <div>
      <div className="flex gap-9">
        {/*<div>
          <Image
            src="https://images.icon-icons.com/3975/PNG/512/url_hyperlink_connect_chain_connection_link_icon_251875.png"
            alt="logo"
            width={50}
            height={25}
          />
        </div>*/}

        <div className="flex gap-7 items-center">
          <a className="hover:bg-amber-300 rounded-2xl text-xl" href="">
            Home
          </a>
          <a className="hover:bg-amber-300 rounded-2xl text-xl" 
             href=""
             target="_blank">

            Projetos
          </a>
          <a
            className="hover:bg-amber-300 rounded-2xl text-xl"
            href="https://br.linkedin.com/in/luiz-guilherme-a85174115?_l=pt_BR"
            target="_blank"
          >
            Contato
          </a>
        </div>

        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
