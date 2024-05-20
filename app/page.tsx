import { client } from "@/sanity/lib/client"
import Hero from "./components/hero"
import RecentProjects from "./components/recent-projects"
import RecentPosts from "./components/recent-posts";


async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) [0..1] {
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

async function getProjects() {
  const query = `
    *[_type == "project" && featured == true]{
      name,
      date,
      description,
      "image": image.asset->url,
      link,
      featured
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  const projects = await getProjects();
  return (
    <div className="w-full">
          <Hero />
          <RecentProjects projects={projects} />
          <RecentPosts posts={posts} />



    </div>
  );
}
