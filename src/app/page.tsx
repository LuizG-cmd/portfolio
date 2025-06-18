import Header from "@/components/header";

import ProfileCard from "@/components/card/ProfileCard";

import About from "@/components/sections/AboutSection/about";

import Tecnologies from "@/components/sections/TecnologiesSection/tecnologies";

import Projects from "@/components/sections/ProjectsSection/projects";

import Blog from "@/components/sections/BlogSection/blog";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex">
          <div className="mr-7">
            <ProfileCard />
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
                <About />
            </div>

            <div className="flex mb-8">
              <Tecnologies />
            </div>

            <div className="flex flex-row justify-between mb-8 gap-7">
              <div className="">
                <Projects />
              </div>
              <div>
                <Blog />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
