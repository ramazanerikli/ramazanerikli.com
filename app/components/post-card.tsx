"use client";
import React from "react";
import Link from "next/link";
import Moment from 'react-moment';

interface Props {
  post: any;
}

export default function PostCard({ post }: Props) {

  return (
    <Link href={`/blog/${post.slug.current}`}>
    <div className="post-card bg-white py-3 pr-3 mb-3 transition-all duration-500 cursor-pointer transition-all">
      <h3 className="post-link underline underline-offset-4 decoration-2 mb-1 transition-all duration-500">{post.title}</h3>
      <dt className="text-sm text-gray-500"><Moment format={'MMMM DD YYYY'} date={post.publishedAt} /></dt>
    </div>
  </Link>
  );
}
