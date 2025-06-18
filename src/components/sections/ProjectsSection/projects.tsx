import React from "react";

import { getGitRepositories, Repositories } from "@/lib/api";

const Projects =  async () => {
  'use client'

  const repositories = await getGitRepositories()

  console.log(repositories)

  return (
    <div className="flex flex-col border rounded-2xl shadow-2xl p-9">
      <div className="">
        <h1 className="text-2xl mb-2">Projetos</h1>
      </div>
      <div className="grid gap-6 mt-3">
      {repositories.map((repositorie) => (
        <div key={repositorie.id} className="rounded-xl border p-4 shadow-md bg-white max-w-auto ">
          <h2 className="text-xl font-semibold">{repositorie.name}</h2>
          <p className="text-sm text-gray-600">{repositorie.description}</p>
          <div className="mt-2 text-xs text-gray-500">
            <span>Linguagem: {repositorie.language}</span><br />
            <span className="text-wrap"></span>⭐{repositorie.stargazers_count}
          </div>
          <a href={repositorie.html_url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600">
            Ver no GitHub →
          </a>
        </div>
      ))}
    </div>
        
      </div>
  );
};

export default Projects;
