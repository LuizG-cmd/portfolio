import React from "react";

import {getNotices} from "@/lib/api";

import { Articles } from "@/lib/api";

const Blog = async () => {
 const notice = await getNotices();


  return (
    <div className="p-9 border rounded-2xl shadow-2xl">
      <h1 className="text-2xl">Blog</h1>
      <div className="flex mt-4">
        {notice.map((post: Articles) => (
          <div key={post.source.id} className="">
            <div className="">
              <h2 className="text-amber-300 font-semibold">Titulo</h2>
              <p>{post.title}</p>
              <h2 className="text-amber-300 font-semibold">Autor</h2>
              <p>{post?.author}</p>
              <h2 className="text-amber-300 font-semibold">Resumo</h2>
              <p className="text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        {notice.map((post: Articles) => (
          <a
              key={post.source.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 items-center p-1 text-sm hover:bg-amber-300 rounded-full text-black mt-3"
            >
              Ler Notícia
            </a>
        )
      )}
      </div>
    </div>
  );
};

export default Blog;
