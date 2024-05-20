import { client } from "@/sanity/lib/client"


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
