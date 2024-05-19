import { client } from "@/sanity/lib/client"


export async function getProjects() {
  const query = `
    *[_type == "project"] {
      name,
      date,
      description,
      "image": image.asset->url,
      link
    }
  `;
  const data = await client.fetch(query);
  return data;
}