import React from "react";
import { Post } from "../types";


interface Props {
  post: Post;
}

export default function BlogCard({ post }: Props) {

  return (
    <div className="flex flex-col my-2 bg-white hover:bg-gray-100 rounded-md px-3 py-3 transition-all">
    <h3 className="font-medium mb-2">{post.title}</h3>
    <p className="text-gray-400">
      {new Date(post._createdAt).toLocaleDateString()}
    </p>
  </div>
  );
}
