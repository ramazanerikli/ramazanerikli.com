import { sanityClient } from "../sanity";
import { Post } from "../types";
import Link from "next/link";

import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";

interface Props {
  posts: [Post];
}

export default function Blog({ posts }: Props) {
  return (
    <div className="mx-auto">
      <Layout>
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl mb-6">Blog</h1>
          <div>
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug?.current}`}>
                <BlogCard post={post} />
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      _createdAt,
      description,
      mainImage,
      slug,
    }
  `;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
