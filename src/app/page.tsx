import Header from "@/components/header";

import ProfileCard from "@/components/card/ProfileCard";

import About from "@/components/sections/AboutSection/about";

import Tecnologies from "@/components/sections/TecnologiesSection/tecnologies";

import Projects from "@/components/sections/ProjectsSection/projects";

import Blog from "@/components/sections/BlogSection/blog";

import { getGitRepositories } from "@/lib/api";

export default async function Home() {

  const repositories = await getGitRepositories();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-7 mb-7 sm:mb-0">
            <ProfileCard />
          </div>

          <div className="flex flex-col">
            <div className="mb-9">
              <About />
            </div>

            <div className="flex mb-9">
              <Tecnologies />
            </div>

            <div className="flex flex-row justify-between mb-9 gap-7">
              <div className="shadow-2xl"><Projects repositories={repositories}/></div>
              <div>{<Blog />}</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
