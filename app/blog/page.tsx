"use client";
import { client } from "@/sanity/lib/client"

import PostCard from "../components/post-card";

export async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      publishedAt,
      excerpt,
      tags,
      body
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="">
      <div className="">
      <h1 className="text-3xl md:text-4xl mb-6">Blog</h1>
          <p className="max-w-[600px] mb-6 text-gray-600 text-xl inter-light">
            Here is where I document things that I learn in my daily work as a web developer.
          </p>
          {posts.map((post: any, index: number) => (
            <PostCard post={post} key={index} />
          ))}
      </div>
    </div>
  );
}

