"use client";
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'


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

const builder = imageUrlBuilder(client)

function urlFor(source: string) {
  return builder.image(source)
}
export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="">
      <div className="">
      <h1 className="text-3xl md:text-4xl mb-6">Projects</h1>
          <p className="max-w-[600px] mb-6 text-gray-600 text-xl inter-light">
          Here is some things that I made over the years.
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {projects.map((project: any, index: number) => (
    <div
    className={`featured-project lg:mb-0 mb-2 border border-gray-100 text-gray-700 hover:text-black rounded-md px-3 py-3 bg-white hover:-translate-y-2 transition-all duration-500 cursor-pointer transition-all`}
  >
    <div className="flex flex-col gap-1 items-start">
    <img src={urlFor(project.image).url()} />  
      <div className="flex items-center gap-2">
      <h3>{project.name}</h3>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 12 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"
        ></path>
      </svg>
      </div>
    </div>
    <p>{project.description}</p>
  </div>
          ))}
          </div>
      </div>
    </div>
  );
}

