import React from "react";

import { Repositories } from "@/lib/api";

interface ProjectsProps {
  repositories: Repositories[];
}

export default function Projects({ repositories }: ProjectsProps) {
  return (
    <div className="flex flex-col border rounded-2xl shadow-2xl p-9">
      <h1 className="text-3xl uppercase font-mono mb-2">Projetos</h1>
      <div className="grid gap-6 mt-3">
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className="rounded-xl border p-4 shadow-md bg-white text-black"
          >
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-sm text-gray-600">{repo.description}</p>
            <div className="mt-2 text-xs text-gray-500">
              <span>Linguagem: {repo.language}</span>
              <br />
              ⭐ {repo.stargazers_count}
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600"
            >
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}